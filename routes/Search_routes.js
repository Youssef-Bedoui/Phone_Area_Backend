const express = require("express");
const router = express.Router();
const {
  searchNews,
  searchReviews,
  searchApps,
} = require("../controllers/SearchArticle_contr");

router.get("/news/:value", searchNews);
router.get("/reviews/:value", searchReviews);
router.get("/apps/:value", searchApps);

module.exports = router;
