// Netlify serverless function — Claude API proxy for affiliate script tool
// Deployed at: /.netlify/functions/generate-script

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

const SYSTEM_PROMPT = "You are a script writing engine for TikTok affiliate creators. Your job is to generate three complete, distinct TikTok video scripts for a creator promoting a custom creator media kit site at tylerdream.com. The site costs $500 and is built in 48 hours. Creators who refer buyers earn $50 per conversion instantly with no threshold. Buyers get 25% off with the affiliate's code, paying $375. You receive four inputs: platform and niche, whether the creator has a site, their follower range, and their brand deal experience. Use all four to personalize every script completely. A creator with under 1K followers and no deals needs aspiration-based framing built around what they want, not what they have. A creator with 50K followers who lands deals inconsistently needs authority-based framing built around the gap between effort and results. A creator with no site yet cannot credibly claim the site changed their life, so frame it as a discovery they are sharing. A creator with a site can frame it from personal experience. Adjust the emotional frame, language level, and CTA energy for every combination of inputs. Every script follows this exact structure: HOOK 0 to 3 seconds: painful specific embarrassing truth, never mention the product, never open positive, one to two sentences maximum, active voice, lowercase conversational tone. PROBLEM STACK next 40 to 50 percent: deep on the pain, no product mentions, the story of posting every day and getting ignored, visceral and specific, no generic statements. BRIDGE around 65 percent mark: one pivot sentence maximum 10 words, no product name, example: then i found out what was actually missing. SOLUTION REVEAL late and earned: introduce tylerdream.com naturally as personal discovery or recommendation, never say affiliated or sponsored, say the site was built in 48 hours, say the creator owns it forever, do not say $500, use discount angle only: my code gets you 25% off, say use my code or link in bio for the discount. CTA: urgency or scarcity language, give a DM trigger word, use DM me the word SITE and I will send you everything or similar, never say click the link, always say grab the link in my bio or DM me, one to two sentences maximum. Output format for all three scripts: SCRIPT 1 colon ONE LINE ANGLE DESCRIPTION IN BRACKETS. Full script with on-screen callouts woven in. Format every on-screen text moment as ON SCREEN colon text here in square brackets on its own line directly before the spoken line it accompanies. Maximum 5 words per on-screen line. No emojis. Spoken lines are lowercase. No teleprompter version. No clean version. Only the filming reference version with callouts integrated. After Script 1 only output HOOK TEST A, HOOK TEST B, HOOK TEST C as alternate first lines for script 1 only. After all three scripts output FILMING NOTES with three specific actionable filming tips personalized to the creator's niche follower range and platform, not generic. After filming notes output DM SCRIPT with three to four sentences the creator copies and sends to a creator friend directly, personalized to their niche, does not feel like spam, includes the $375 discount angle, ends with a question that invites a reply. Generate all three scripts hook tests for script one only filming notes and DM script in one complete response. No preamble. No explanation. No meta-commentary. Start immediately with SCRIPT 1. Tone rules: lowercase conversational feel for all spoken lines, active voice, no em dashes, no buzzwords, no corporate language, 12-year-old reading level, specific beats generic every time, the creator reads this and films within 5 minutes.";

exports.handler = async function(event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { platform_niche, has_site, follower_range, brand_deal_experience } = body;

  if (!platform_niche || !has_site || !follower_range || !brand_deal_experience) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required inputs' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  const userMessage = `Platform and niche: ${platform_niche}. Has a creator site: ${has_site}. Follower range: ${follower_range}. Brand deal experience: ${brand_deal_experience}. Generate three complete scripts now.`;

  try {
    const response = await fetch(ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [
          { role: 'user', content: userMessage }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', response.status, errText);
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'Upstream API error', detail: errText }) };
    }

    const data = await response.json();
    const text = data.content && data.content[0] && data.content[0].text;

    if (!text) {
      return { statusCode: 502, headers, body: JSON.stringify({ error: 'Empty response from API' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ result: text }) };

  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal error', detail: err.message }) };
  }
};
