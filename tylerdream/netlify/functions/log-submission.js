exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    const payload = {
      name: data.name || null,
      email: data.email || null,
      location: data.location || null,
      niche: data.niche || null,
      niche_other: data.niche_other || null,
      tagline: data.tagline || null,
      referral_code: data.referral_code || null,
      raw: data
    };

    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/submissions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase error:', err);
      return { statusCode: 500, body: 'DB write failed' };
    }

    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: 'Error' };
  }
};
