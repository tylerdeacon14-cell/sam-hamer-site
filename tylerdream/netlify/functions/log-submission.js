const SHEET_ID = '1MBMaArVcLm0cDd5_8DfYame1S5l4iQc3Rucrpn7eCiE';
const SHEET_TAB = 'Sheet1';

// Service account credentials from env vars (set in Netlify dashboard)
function getCredentials() {
  let key = process.env.GOOGLE_PRIVATE_KEY || '';
  // Handle both literal \n and actual newlines
  key = key.replace(/\\n/g, '\n');
  // Strip surrounding quotes if Netlify added them
  key = key.replace(/^["']|["']$/g, '');
  return {
    client_email: (process.env.GOOGLE_CLIENT_EMAIL || '').trim(),
    private_key: key,
  };
}

async function getAccessToken(credentials) {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const claim = Buffer.from(JSON.stringify({
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  })).toString('base64url');

  const { createSign } = await import('crypto');
  const sign = createSign('RSA-SHA256');
  sign.update(`${header}.${claim}`);
  const signature = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${header}.${claim}.${signature}`;

  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  const data = await resp.json();
  return data.access_token;
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method not allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const credentials = getCredentials();

    if (!credentials.client_email || !credentials.private_key) {
      console.error('Missing Google credentials in env vars');
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Missing credentials' }) };
    }

    console.log('Auth attempt for:', credentials.client_email);
    console.log('Key starts with:', credentials.private_key.substring(0, 40));

    const token = await getAccessToken(credentials);

    const row = [
      new Date().toISOString(),
      body.name || '',
      body.email || '',
      body.phone || '',
      body.referral_code || body._track_ref || '',
      body._track_src || '',
      body._track_device || '',
      body.message || body.project_details || '',
      body.tiktok || body.tiktok_handle || '',
    ];

    const appendResp = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: [row] }),
      }
    );

    if (!appendResp.ok) {
      const err = await appendResp.text();
      console.error('Sheets API error:', err);
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Sheets write failed', detail: err }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('log-submission error:', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
