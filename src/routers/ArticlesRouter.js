const router = require('express').Router();
const {
  renderViewAddArticle, createArticle, listArticles, deleteArticle, editArticle, updateArticle,
} = require('../controllers/ArticlesController');

router.get('/articles/new', renderViewAddArticle);
router.post('/articles/save', createArticle);
router.get('/articles/list', listArticles);
router.post('/articles/delete', deleteArticle);
router.get('/articles/edit/:id', editArticle);
router.post('/articles/update', updateArticle);

module.exports = router;
