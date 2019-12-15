const router = require('express').Router();

const authController = require('../controllers/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.delete('/login', authController.logout);
router.get('/token', authController.refreshTokens);

module.exports = router;