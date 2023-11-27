const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneAppsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: [
    {
      title: {
        type: String,
      },
      innerTitle: {
        type: String,
      },
      paragraph: {
        type: String,
      },
      image: {
        type: String,
      },
      videoId: {
        type: String,
      },
      list: {
        type: [String],
      },
    },
  ],
  images: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const AppsSchema = mongoose.model(
  "PhoneAppsArticles",
  PhoneAppsSchema
);

module.exports = AppsSchema;
