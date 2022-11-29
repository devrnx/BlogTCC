const router = require('express').Router();
const IndexRouter = require('./IndexRouter');
const CategorieRouter = require('./CategoriesRouter');
const ArticlesRouter = require('./ArticlesRouter');
const UserRouter = require('./UserRouter');
const LoginRouter = require('./LoginRouter');
const authentication = require('../middlewares/AdminAuth');

router.use('/', IndexRouter);
router.use('/admin', LoginRouter);
router.use('/admin', authentication, UserRouter);
router.use('/admin', authentication, CategorieRouter);
router.use('/admin', authentication, ArticlesRouter);

module.exports = router;
