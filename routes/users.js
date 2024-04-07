const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/study2")

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  }, 
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  }
})

userSchema.plugin(plm)
module.exports = mongoose.model("User", userSchema);