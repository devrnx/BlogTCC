const router = require('express').Router();
const {
  listUsers, viewCreateUser, createUser, deleteUser, searchUserId, editUser,
} = require('../controllers/UserController');

router.get('/list/users', listUsers);
router.get('/users/create', viewCreateUser);
router.post('/users/new', createUser);
router.post('/users/delete', deleteUser);
router.get('/users/search/:id', searchUserId);
router.post('/users/edit', editUser);

module.exports = router;
