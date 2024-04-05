import express from "express";
import User from "../schema/users.js";
import jwt  from "jsonwebtoken";
import verifyToken from "../validator/verifyToken.js";

const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Method" });
});

// signup route
router.post("/signup", (req, res) => {
  const { username, email, password, contact, designation, deptno } = req.body;
  
  const newUser = new User({
    username: username,
    password: password,
    email: email,
    contact : contact,
    designation : designation,
    deptno : deptno
  });

    newUser
    .save()
    .then(() => {
      res.status(200).json("user created succesfully...");
    })
    .catch((err) => {
      console.log(err)
    });
});


// login route
router.post("/login", (req, res) => {
 
  const { username, password } = req.body;
  User.find({ username: username, password: password }).then((user) => {
    if (user) {
      const token = jwt.sign({ username }, process.env.SECRET_KEY);
      res.status(200)
        .json({ message: "Succesfully logged in ", token: token });
    } else {
      res.status(404).json({ message: "User validation failed " });
    }
  });
});


// protected route
router.get("/getUser", verifyToken, (req, res) => {
  const { username } = req.decoded;
  User.find({ username: username }).then((user) => {
    if (user) {
      res.status(200).json({ userData: user });
    } else {
      res.status(400).json("user doesn't exist");
    }
  });
});


// route to display all the existing user details
router.get("/getAllUser",(req,res)=>{
  User.find({})
    .then(userData=>res.status(200).json({allUser : userData} ))
    .catch(err=>console.log(err))
})  
export default router;
