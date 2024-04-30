const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const BlogRoute = require('./routes/blogRoutes');
const CategoryRoute = require('./routes/CategoryRoutes');

const app = express();
// MongoDb connection
const DBURL = 'mongodb://localhost:27017/test';
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(DBURL).then(
        console.log('Db connected'),
    );
}

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use('/blogs',BlogRoute);
app.use('/category',CategoryRoute);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

app.listen(3050, () => {
    console.log(`Server running🚀`);
});