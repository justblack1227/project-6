const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/project/:id', (req, res, next) => {
  
  if (projects[req.params.id]) {
    const proj = projects[req.params.id];
    const tech = proj.technologies 
    
    res.render('project', {
        title: proj.project_name,
        description : proj.description,
        live_url : proj.live_link,
        git_url: proj.github_link,
        tech, 
        proj
    });
  } else {
      next();
    }
});

module.exports = router;