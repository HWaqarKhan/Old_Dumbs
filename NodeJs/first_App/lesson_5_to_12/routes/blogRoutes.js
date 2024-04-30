const express = require('express')
const Blog = require('../controllers/BlogController');
const router = express.Router();
// blog routes

router.get('/',Blog.blogIndex);

router.post('/',Blog.blogPost );

router.get('/create',Blog.PostGet); 

router.get('/:id',Blog.blogDetails);

router.delete('/:id', Blog.blogDelete)

module.exports =router;
