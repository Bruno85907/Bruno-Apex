export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if(data.error) {
      console.error('Anthropic error:', JSON.stringify(data.error));
      res.status(200).json({ text: 'Erro da IA: ' + (data.error.message || JSON.stringify(data.error)) });
      return;
    }
    const text = data.content?.[0]?.text || 'Não foi possível gerar a análise.';
    res.status(200).json({ text });

  } catch (error) {
    console.error('Catch error:', error.message);
    res.status(500).json({ error: 'Erro ao conectar com a IA: ' + error.message });
  }
}
