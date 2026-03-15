import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.SECRET_KEY);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export { userAuth };