const express = require("express");
const router = express.Router();
const {
  addArticle,
  getAllArticles,
  updateArticle,
  patchArticle,
  deleteArticle
 } = require("../controllers/PhoneDeals_controller");

router.post("/add", addArticle);
router.get("/articles", getAllArticles);
router.put("/update/:id", updateArticle);
router.patch("/patch/:id", patchArticle);
router.delete("/delete/:id", deleteArticle);

module.exports = router;
