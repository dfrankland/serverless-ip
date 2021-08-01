module.exports = async (req, res) => {
  // https://vercel.com/docs/edge-network/headers#x-forwarded-for
  const ip = req.headers['x-forwarded-for'];

  res.json({ ip });
  
  await new Promise(resolve => setTimeout(resolve, 200));

  throw new Error(ip);
};
