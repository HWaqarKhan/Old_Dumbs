const Blog = require('../models/blog');
const Category = require('../models/Category');

const blogIndex = (req, res) => {
    Blog.find().sort({ createdAt: -1 }) //latest Blog show on the top
        .then(result => {
            res.render('Blogs/index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}

const blogPost = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
    const category = new Category(req.title);
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
}

const PostGet = (req, res) => {
    const test = Category.find();
    // if (test.length !==null) {

    //     res.redirect('/category/create')
    // }else{
    //     test.then(result => {
    //         res.render('Blogs/create', { title: 'Create a new blog', category: result });
    //     });
    // }
    test.then(result => {
        res.render('Blogs/create', { title: 'Create a new blog', category: result });
    });
} 

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('Blogs/details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            res.status(404).render('404', { title: '404' });
        });
}

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(r => {
        res.json({ redirect: '/blogs' })
    }).catch(err => console.log(err))
}
module.exports = { blogIndex, blogPost, blogDetails, blogDelete, PostGet }