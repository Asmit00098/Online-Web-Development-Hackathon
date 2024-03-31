const express = require('express');
const router = express.Router();
const passport = require("passport");
const userModel = require("./users");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));



router.get('/homepage',(req,res) =>{
    res.render("homepage")
})



router.route('/register')
    .get((req,res) =>{
        res.render("register")
 })
    .post((req,res) => {
    var userdata= new userModel({
        username: req.body.username,
        email: req.body.email,
    });
    userModel.register(userdata, req.body.password)
    .then(function(registereduser){
        passport.authenticate("local")(req,res,()=>{
            res.redirect("/homepage")
        })
    })
});
router.get("/login", (req,res)=> {
    res.render("login")
})

router.post('/login', passport.authenticate('local', {
      failureRedirect: '/register',
      successRedirect: '/homepage',
    }),
    function(req, res, next) {
      // Authentication successful
    }
  );
router.get("/logout", function(req,res,next){
    req.logout(function(err){
        if(err) { return next(err); }
        res.redirect("/register")
    })
})



module.exports = router;