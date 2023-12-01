const DealsSchema = require("../models/PhoneDealsArt_model");

const addArticle = (req, res) => {
  const {
    model,
    description,
    image,
    price,
    discount,
    store,
    screen,
    storage,
    battery,
    rearCamera,
    frontCamera,
    colors,
    link,
  } = req.body;
  DealsSchema.create({
    model,
    description,
    image,
    price,
    discount,
    store,
    screen,
    storage,
    battery,
    rearCamera,
    frontCamera,
    colors,
    link,
  })
    .then((result) => {
      console.log(result);
      res.send("Article added");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const getAllArticles = (req, res) => {
  DealsSchema.find()
    .sort({ createdAt: -1 }) 
    .then((articles) => {
      res.json(articles);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const getArticleById = (req, res) => {
  const { id } = req.params;

  DealsSchema.findById(id)
    .then((article) => {
      if (!article) {
        return res.status(404).send("Article not found");
      }
      res.json(article);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};



const updateArticle = (req, res) => {
  const { id } = req.params;
  const {
    model,
    description,
    image,
    price,
    discount,
    store,
    screen,
    storage,
    battery,
    rearCamera,
    frontCamera,
    colors,
    link,
  } = req.body;

  DealsSchema.findByIdAndUpdate(
    id,
    {
      model,
      description,
      image,
      price,
      discount,
      store,
      screen,
      storage,
      battery,
      rearCamera,
      frontCamera,
      colors,
      link,
    },
    { new: true }
  )
    .then((updatedArticle) => {
      if (!updatedArticle) {
        return res.status(404).send("Article not found");
      }
      res.json(updatedArticle);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const patchArticle = (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;

  DealsSchema.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
    .then((updatedArticle) => {
      if (!updatedArticle) {
        return res.status(404).send("Article not found");
      }
      res.json(updatedArticle);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const deleteArticle = (req, res) => {
  const { id } = req.params;

  DealsSchema.findByIdAndDelete(id)
    .then((deletedArticle) => {
      if (!deletedArticle) {
        return res.status(404).send("Article not found");
      }
      res.json({ message: "Article deleted successfully", deletedArticle });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  addArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  patchArticle,
  deleteArticle,
};
