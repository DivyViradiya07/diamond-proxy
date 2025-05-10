export default async function handler(req, res) {
  const response = await fetch('http://103.251.17.166:8003/GetStock/AllStock');
  const data = await response.text();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(data);
}
