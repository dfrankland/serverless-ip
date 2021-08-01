module.exports = (req, res) => {
  // https://vercel.com/docs/edge-network/headers#x-forwarded-for
  const ip = req.headers['x-forwarded-for'];

  res.json({ ip });

  throw new Error(ip);
};
