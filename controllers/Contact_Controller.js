
const ContactModel = require("../models/Contact_Model");

async function addMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    const newMessage = new ContactModel({ name, email, message });

    await newMessage.save();

    res.status(201).json({ message: "Message added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addMessage,
};
