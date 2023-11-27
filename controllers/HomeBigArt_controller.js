const HomeTopModel = require("../models/HomebigArticleModel");

const addArticle = (req, res) => {
  const { title, innerTitle, description, images, author, source } = req.body;
  HomeTopModel.create({
    title,
    innerTitle,
    description,
    images,
    author,
    source,
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
  HomeTopModel.find()
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

  HomeTopModel.findById(id)
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
  const { title, innerTitle, description, images, author, source } = req.body;

  HomeTopModel.findByIdAndUpdate(
    id,
    { title, innerTitle, description, images, author, source },
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

  HomeTopModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true })
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

module.exports = {
  addArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  patchArticle,
};
