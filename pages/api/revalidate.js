// pages/api/revalidate.js

export default async function handler(req, res) {
  const { query } = req;
  const { path } = query;
  // Check for secret to confirm this is a valid request
  //   if (secret !== process.env.MY_SECRET_TOKEN) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }

  try {
    await res.unstable_revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
