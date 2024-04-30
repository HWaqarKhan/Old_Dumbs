const mongoose = require('mongoose');
// const Category = require('./cotegory')
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    // Category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    // },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;
