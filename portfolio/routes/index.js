const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


router.get('/', (req, res) => {
  res.render('index', { 
    heading: "Hey Prospective Employer!",
    description : "Please enjoy this portfolio that demonstrates my impeccable skills, including but not limited to: web developement, app development, soft skills, self-learning, and ios development. If there is anything else you need to know, please do not hestitate to reach out.",
    projects });
  
});

router.get('/about', (req, res) => {
  res.render( 'about', {
    name : "Justin Black",
    job_title: "Javascript Full Stack Developer"
    
  });
});


module.exports = router;