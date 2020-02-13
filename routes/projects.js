const express = require('express');
const router = express.Router();
const Project = require('../models/project');

router.get('/', (req, res, next) => {
    Project.find({}, (err, result) => {
       if (err) throw err;
        res.render('projects', {
            projects: result
        });
    });
});

// Get add-project Form
router.get('/add', function(req, res){
  res.render('form-add-project');
});

// Add new project
router.post('/add', (req, res, mext) => {
  const hrTime = process.hrtime();
  const id = hrTime[0] * 1000 + hrTime[1] / 1000000;
  const ptype = req.body.projectType;
  const pname = req.body.projectName;
  const desc = req.body.description;
  const github = req.body.githubUrl;
  const created = new Date();
  const updated = new Date();

  let p = new Project({
      id: id,
      pType: ptype,
      projectName: pname,
      description: desc,
      githubUrl: github,
      created: created,
      updated: updated
  });
  p.save(err => {
      if (err) throw err;
      Project.find({}, (err, result) => {
          res.render('projects', {
              projects: result
          });
      });
  })
});

module.exports = router;
