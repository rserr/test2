const posts = require('../models/postArrays');

module.exports.sayHello = function(req, res) {
    res.send('Hello');
};

module.exports.sayBye = function(req, res) {
    res.send('Goodbye');
};

module.exports.fetchAllPosts = function(req, res) {
    res.send(posts);
};

module.exports.fetchPost = function(req, res) {
    // Pass second arg to post.ejs
    res.render('post', {post : posts[req.params.id]});
};