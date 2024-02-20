const express = require("express");
const router = express.Router();
const {
  addArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  patchArticle,
  deleteArticle
 } = require("../controllers/PhoneDeals_controller.js");

router.post("/add", addArticle);
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticleById);
router.put("/update/:id", updateArticle);
router.patch("/patch/:id", patchArticle);
router.delete("/delete/:id", deleteArticle);

module.exports = router;
