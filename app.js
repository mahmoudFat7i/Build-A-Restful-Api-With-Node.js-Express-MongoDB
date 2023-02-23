const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');
const cors = require('cors')
//middleWares
app.use(cors());
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => res.send('we are home'));

// connect database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL, () => console.log('db connected'));
app.listen(3000, () => console.log('app started on 3000'));

// //Middlewares
// app.use('/posts',()=>console.log('posts middleware'))
