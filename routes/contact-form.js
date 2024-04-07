const mongoose = require("mongoose")
const contactSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
    }, 
    email: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    }
  })
  
module.exports = mongoose.model("Contact", contactSchema);