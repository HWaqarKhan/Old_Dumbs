const express = require('express')
const Category = require('../models/Category')
const router = express.Router();

router.get('/',async (req,res)=>{
    try {
        const category = await Category.find();
        res.render('Category/index', { category:category , title: 'All blogs' });
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})

router.post('/',async (req,res)=>{
    const category = new Category({title : req.body.title});
    try {
        // if(savedCategory.title === req.body.title)
        //     res.send('Category Already Exist')
        const savedCategory = await category.save();
        res.status(201).send(savedCategory)
        res.send('Category Added')
        // res.render('Category/create')
        // res.redirect('/');
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/create',(req, res) => {
    res.render('Category/create', { title: 'Create a new Category' });
})

module.exports = router;