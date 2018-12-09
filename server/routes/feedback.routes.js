const express = require('express')
router = express();
const pool = require('../modules/pool');


router.post('/', function(req, res){
    let feedback = req.body
    console.log(feedback);
    
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryString, [feedback.feeling, feedback.content, feedback.support, feedback.comments])
    .then(() => {
        
      res.sendStatus(201);
    }).catch((error) => {
      console.log('Error in POST', error);
      res.sendStatus(500);
    });
  });


module.exports = router;
