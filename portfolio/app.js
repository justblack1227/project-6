//Techdegree Project 6
//by Justin Black 
//
//Going for Exceed Expectations but will accept Meet Expectations 

const express = require('express');
const data = require('./data');
const app = express();
const { projects } = require('./data.json');

app.set('view engine', 'pug');

const routes = require('./routes/index.js');
const portfolios = require('./routes/portfolio.js');
app.use(routes);
app.use(portfolios);

app.use( '/static', express.static('public'));

app.use(( req, res, next) => {
  const err = new Error('Yikes! Looks like you are on a page that does not exist.');
  err.status =404; 
  console.log('Yikes! Looks like you are on a page that does not exist.');
  next(err);
});

app.use(( err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000);