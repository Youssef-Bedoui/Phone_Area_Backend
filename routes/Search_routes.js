const express = require("express");
const router = express.Router();
const {
  searchNews,
  searchTechNews,
  searchApps,
} = require("../controllers/SearchArticle_contr");

router.get("/news/:value", searchNews);
router.get("/TechNewsArticles/:value", searchTechNews);
router.get("/apps/:value", searchApps);

module.exports = router;
