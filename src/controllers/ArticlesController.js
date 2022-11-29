const CategoriesModel = require('../models/CategoriesModel');
const ArticlesModel = require('../models/ArticlesModel');

const renderViewAddArticle = async (req, resp) => {
  const response = await CategoriesModel.listCategoriesBank();
  resp.render('articles/newArticle', { response });
};

const createArticle = async (req, resp) => {
  const {
    title, preview, article, idCategorie,
  } = req.body;
  const response = await ArticlesModel.addArticleBank(title, preview, article, idCategorie);
  if (response) resp.redirect('/admin/articles/list');
};

const listArticles = async (_req, resp) => {
  const response = await ArticlesModel.listArticleBank();
  if (response) return resp.render('articles/listArticles', { response });
  resp.redirect('/articles/list');
};

const deleteArticle = async (req, resp) => {
  const { id } = req.body;
  const response = await ArticlesModel.deleteArticleBank(id);
  if (response) resp.redirect('/admin/articles/list');
};

const editArticle = async (req, resp) => {
  const { id } = req.params;
  const articles = await ArticlesModel.listArticleIDBank(id);
  const categories = await CategoriesModel.listCategoriesBank();

  resp.render('articles/editArticle', { categories, articles });
};

const updateArticle = async (req, resp) => {
  const {
    id, title, preview, article, categorieId,
  } = req.body;

  const response = await ArticlesModel.updateArticleBank(id, title, preview, article, categorieId);
  if (response) resp.redirect('/admin/articles/list');
};

const userNameRender = async (req, resp) => {
  const {
    id, title, preview, article, categorieId,
  } = req.body;

  const response = await ArticlesModel.updateArticleBank(id, title, preview, article, categorieId);
  if (response) resp.redirect('/admin/articles/list');
};

module.exports = {
  renderViewAddArticle,
  createArticle,
  listArticles,
  deleteArticle,
  editArticle,
  updateArticle,
};
