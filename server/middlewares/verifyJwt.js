const verifyJwtAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.Token_Secret, (err, user) => {
    if (err) return res.sendStatus(403); //invalid token
    req.id = user.AdminId;
    next();
  });
};
