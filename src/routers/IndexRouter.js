const router = require('express').Router();
const {
  listArticles, listArticleId, listArticlesCategory, listArticlesNum,
} = require('../controllers/indexControllers');

router.get('/', listArticles);
router.get('/:slug', listArticleId);
router.get('/category/:id', listArticlesCategory);
router.get('/page/:num', listArticlesNum);

module.exports = router;
