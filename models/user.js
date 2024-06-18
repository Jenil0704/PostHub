const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jenilreshamiya7:jenil0407@cluster0.krf0egp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    profilepic : {
        type : String,
        default : "default.jpg",
    },
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "post"
        }
    ],
})

module.exports = mongoose.model("user", userSchema);