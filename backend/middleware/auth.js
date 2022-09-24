import JWT from "jsonwebtoken";
import User from "../Models/UsersModel.js";

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = await JWT.verify(token, process.env.JWTSECRET);
      console.log("decoded", decoded.id);
      const user = await User.findById(decoded.id).select(-password);
      console.log(user);
      req.user = user;
      next();
    } catch (err) {
      console.log(err.message);
      res.status(401).json({
        status: "failed",
        error: err.message,
      });
    }
  }
  if(!token){
    res.status.json({
        status:"failed",
        error:"No token,Not authorized"
    })
  }
};

//authorize user based on roles
const authorizeUser =(roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      throw new Error(`Role ${req.user.role} is not allowed to access this resource `)
    }
    next()
  }
}


export {authorizeUser,protect}