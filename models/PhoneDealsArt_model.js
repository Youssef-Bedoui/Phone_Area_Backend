const mongoose = require("mongoose");

const phoneDealsSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  store: {
    type: [String],
    required: true,
  },
  screen: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  rearCamera: {
    type: String,
    required: true,
  },
  frontCamera: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const DealsSchema = mongoose.model("PhoneDealsArticles", phoneDealsSchema);

module.exports = DealsSchema;
