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

app.post('/student/add',  (req, res)=> {
    var student = {
        first: req.body.fname,
        last: req.body.lname
    }
    console.log(student);
    res.render('signup', {
        userValue: student,
        topicHead: 'Student Form'
    });
});

module.exports = app;