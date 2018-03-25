const express = require('express');
const router = express.Router();
const controller = require('../controllers/postsController');

router.get('/', controller.sayHello);

router.get('/bye', controller.sayBye);

router.get('/post', controller.fetchAllPosts);

router.get('/post/:id', controller.fetchPost);

module.exports = router;
