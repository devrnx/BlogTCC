const ArticlesModel = require('../models/IndexModel');
const CategoriesModel = require('../models/CategoriesModel');

const listArticles = async (req, resp) => {
  const { user: userLog } = req.session;
  const categories = await CategoriesModel.listCategoriesBank();
  const response = await ArticlesModel.listArticleBank();
  if (response.length >= 1) return resp.render('index', { response, categories, userLog });
  resp.render('index', { response, categories, userLog });
};

const listArticleId = async (req, resp) => {
  const { user: userLog } = req.session;
  const { slug } = req.params;
  const categories = await CategoriesModel.listCategoriesBank();
  const response = await ArticlesModel.listArticleIDBank(slug);
  const article = response[0];
  if (response.length >= 1) return resp.render('articles/articleId', { article, categories, userLog });
};

const listArticlesCategory = async (req, resp) => {
  const { id } = req.params;
  const categories = await CategoriesModel.listCategoriesBank();
  const articles = await ArticlesModel.listArticlesByCategoryBank(id);
  if (articles.length >= 1) return resp.render('articles/articlesByCategorie', { articles, categories });
  return resp.render('articles/notFound', { articles, categories });
};

const listArticlesNum = async (req, resp) => {
  const { num } = req.params;
  const numInt = parseInt(num, 10);
  if (numInt === 0) return resp.redirect('/');
  const categories = await CategoriesModel.listCategoriesBank();
  const response = await ArticlesModel.listArticlesNumBank(num);
  if (response.length > 1) return resp.render('articles/pageArticles', { response, categories, numInt });
  return resp.render('articles/notFound', { response, categories });
};

module.exports = {
  listArticles,
  listArticleId,
  listArticlesCategory,
  listArticlesNum,
};