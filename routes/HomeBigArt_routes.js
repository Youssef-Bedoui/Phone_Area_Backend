const router = require("express").Router();
const {
  addArticle,
  getAllArticles,
  updateArticle,
  patchArticle,
} = require("../controllers/HomeBigArt_controller.js");

router.post("/add", addArticle);
router.get("/articles", getAllArticles);
router.put("/articles/:id", updateArticle);
router.patch("/articles/:id", patchArticle);

module.exports = router;
