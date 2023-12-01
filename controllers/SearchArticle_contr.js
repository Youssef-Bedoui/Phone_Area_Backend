const HomeArticle = require("../models/HomeArticlesModel"); // Import your homeArticleSchema model
const techNewsArticleSchema = require("../models/TechNewsArt_model"); // Import your techNewsArticleSchemaSchema model
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

const searchTechNews = async (req, res) => {
  const { value } = req.params;

  try {
    const results = await techNewsArticleSchema.find({
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

module.exports = { searchNews, searchTechNews, searchApps };
