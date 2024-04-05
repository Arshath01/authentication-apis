import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : String,
    email : String,
    contact : Number,
    designation : String,
    deptno : String
})

const User = mongoose.model("user",userSchema);

export default User;