const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    // blog:   [{ type: mongoose.Types.ObjectId, ref: 'Blog' }],
}, { timestamps: true })

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
