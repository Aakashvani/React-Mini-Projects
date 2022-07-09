import { createClient } from "pexels";
const client = createClient(process.env.API_KEY);
const handler = (req, res) => {
  const {
    method,
    query: { query, page },
  } = req;

  if (method !== "GET") return res.status(405).send("Method not allow");

  if (!query || !page) return res.status(400).send("Bad request");

  const result = await client.photos.search({query,page});

  console.log(result);

  return res.send(result);
};

export default handler;