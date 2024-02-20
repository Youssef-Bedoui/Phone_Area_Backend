const express = require("express");
const router = express.Router();
const {
  addArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  patchArticle,
  deleteArticle,
} = require("../controllers/HomeArt_contr.js");

router.post("/add", addArticle);
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticleById);
router.put("/articles/:id", updateArticle);
router.patch("/articles/:id", patchArticle);
router.delete("/articles/:id", deleteArticle);

module.exports = router;
