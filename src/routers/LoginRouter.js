const router = require('express').Router();
const { renderViewLogin, userAuthentication, userLogout } = require('../controllers/LoginController');

router.get('/login', renderViewLogin);
router.post('/authentication', userAuthentication);
router.get('/logout', userLogout);

module.exports = router;
