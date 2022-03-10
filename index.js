const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index', {title:title});
});

///rodgers
app.get('/rodgers', (req, res) => {
  var title = 'My Aaron Rodgers Page';
  res.render('pages/rodgers', {title:title});
});

///adams
app.get('/adams', (req, res) => {
  var title = 'My Davante Adams Page';
  res.render('pages/adams', {title:title});
});

///jones
app.get('/jones', (req, res) => {
  var title = 'My Aaron Jones Page';
  res.render('pages/jones', {title:title});
});

///jones
app.get('/alexander', (req, res) => {
  var title = 'My Jaire Alexander Page';
  res.render('pages/alexander', {title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
