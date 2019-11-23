const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var data = {
    name: 'dev_lop',
    hobbies: ['playing football', 'playing chess', 'cycling']
}

app.get('/', (req, res) => {
    res.render('home', { data: data });
});

module.exports = app;