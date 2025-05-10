export default async function handler(req, res) {
  try {
    const response = await fetch('http://103.251.17.166:8003/GetStock/AllStock', {
      method: 'GET',
    });

    const data = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
}
