import  jwt  from "jsonwebtoken";

function verifyToken(req,res,next){
    const token = req.headers['authorization'];

    if(!token){
        res.status(401).json({ message : "Unauthorized Access"});
    }

    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.status(401).json("Invalid Token");
        }
        req.decoded = decoded;
        next();
    })
}

export default verifyToken;