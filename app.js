const express = require('express');
const app = express();
const parser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

var data = {
    name: 'dev_lop',
    hobbies: ['playing football', 'playing chess', 'cycling']
}

app.get('/', (req, res) => {
    res.render('home', { data: data });
});


app.post('/addUser', (req, res) => {
    var student = {
        first: req.body.fname,
        last: req.body.lname
    }
    console.log(student);
    res.render('signup', {
        userValue: student,
        topicHead: 'User Form'
    });
});
app.get('/addUser', (req, res) => {
    var student = {
        first: req.body.fname,
        last: req.body.lname
    }
    res.render('signup', {
        userValue: student,
        topicHead: 'User Form'
    });
});

app.get('/posts', function (req, res, next) {
    let blogPosts = [
        {
            title: 'Perk is for real!',
            body: '...',
            author: 'Aaron Larner',
            publishedAt: new Date('2016-03-19'),
            createdAt: new Date('2016-03-19')
        },
        {
            title: 'Development continues...',
            body: '...',
            author: 'Aaron Larner',
            publishedAt: new Date('2016-03-18'),
            createdAt: new Date('2016-03-18')
        },
        {
            title: 'Welcome to Perk!',
            body: '...',
            author: 'Aaron Larner',
            publishedAt: new Date('2016-03-17'),
            createdAt: new Date('2016-03-17')
        }
    ]
    res.render('blog/post', { posts: blogPosts });
});
module.exports = app;