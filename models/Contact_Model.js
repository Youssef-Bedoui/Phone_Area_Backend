const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const ContactModel = mongoose.model("Message", contactSchema);

module.exports = ContactModel;
