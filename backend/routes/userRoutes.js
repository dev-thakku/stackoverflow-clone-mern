const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userControllers');

const router = require('express').Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/me', getMe);

module.exports = router;
