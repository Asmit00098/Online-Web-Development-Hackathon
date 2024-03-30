const passport = require("passport");
const user = require("../models/models")
const userModel = require("../routes/users")


const home = async (req,res) =>{
    try{
        res.render("index")
    }
    catch(err) {
        console.log(err);
    }
}

const register = async (req,res) =>{
    try{
        res.render("register")
    }
    catch(err){
        console.log(err);
    }
}
const registerPost = async (req,res) => {
    var userdata= new userModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
    userModel.register(userdata, req.body.password)
    .then(function(registereduser){
        passport.authenticate("local")(req,res,()=>{
            res.redirect("/")
        })
    })
}


const login = async (req,res) =>{
    try{
        res.render("login")
    }
    catch(err){
        console.log(err);
    }
}

const loginGet = (passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}), (req, res) => { })
module.exports = {home, register, registerPost, loginGet, login}