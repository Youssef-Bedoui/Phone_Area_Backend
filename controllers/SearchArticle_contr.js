const HomeArticle = require("../models/HomeArticlesModel"); // Import your homeArticleSchema model
const ReviewsArticle = require("../models/ReviewsArticleModel"); // Import your reviewsArticleSchema model
const AppsArticle = require("../models/PhoneAppsModel"); // Import your AppsSchema model

const searchNews = async (req, res) => {
  const { value } = req.params;

  try {
    const results = await HomeArticle.find({
      title: { $regex: new RegExp(value, "i") },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const searchReviews = async (req, res) => {
  const { value } = req.params;

  try {
    const results = await ReviewsArticle.find({
      title: { $regex: new RegExp(value, "i") },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const searchApps = async (req, res) => {
  const { value } = req.params;

  try {
    const results = await AppsArticle.find({
      title: { $regex: new RegExp(value, "i") },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { searchNews, searchReviews, searchApps };
