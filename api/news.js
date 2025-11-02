export default async function handler(req, res) {
  const { query } = req.query;
  const API_KEY = "bc55d245a902b90a3b61a1364b1197e1";
  const BASE_URL = "https://gnews.io/api/v4/search";

  try {
    const response = await fetch(`${BASE_URL}?q=${query}&lang=en&max=10&apikey=${API_KEY}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
