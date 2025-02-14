import jwt from "jsonwebtoken";

export const isAuthenticated = async(req, res, next) => {
  try {
    const token = req.body.cookie;
    if (!token) {
    return  res.status(401).json({
        message: "user not Authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token,process.env.SECRET_KEY);
    if(!decode){
      return  res.status(401).json({
            message:"Invalid token",
            success:false
        });
    } 
      req.id = decode.userId;
      next();
  } catch {
    console.log(error);
  }
};
