const router = require('express').Router();

const {
  renderViewAddCategorie, addCategorieBank,
  listCategories, deleteCategorie, searchCategorieID, updateCategorie,
} = require('../controllers/CategoriesController');

router.get('/categories/new', renderViewAddCategorie);
router.post('/categories/save', addCategorieBank);
router.get('/categories/list', listCategories);
router.post('/categories/delete', deleteCategorie);
router.get('/categories/search/:id', searchCategorieID);
router.post('/categories/update', updateCategorie);

module.exports = router;
