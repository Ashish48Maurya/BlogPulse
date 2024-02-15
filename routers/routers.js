const service = require('../controllers/service')
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth')


router.post('/register', service.signup)
router.post('/signin', service.signin)
router.get('/getPosts',authMiddleware, service.home)
router.get('/getUserPosts',authMiddleware, service.getUserPosts)
router.get('/user', authMiddleware, service.user)
module.exports = router;