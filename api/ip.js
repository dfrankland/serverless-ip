module.exports = (req, res) => {
  console.log(req.headers);

  // https://vercel.com/docs/edge-network/headers#x-forwarded-for
  const ip = req.headers['x-forwarded-for'];

  console.error(ip);

  res.json({ ip });
};
