const express = require('express');
const router = express();
const authcontrollers = require("../controllers/auth-controller")
const userModel = require("./users")
const localStratergy = require("passport-local")
const passport = require("passport")
passport.use(new localStratergy(userModel.authenticate()))



router.route('/').get(authcontrollers.home)

router.route('/register').get(authcontrollers.register).post(authcontrollers.registerPost)

router.route("/login").get(authcontrollers.login).post(authcontrollers.loginGet)

module.exports = router;