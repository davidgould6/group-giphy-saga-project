const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('favorite.router hit');
  let queryText = 'SELECT * FROM "favorites" ORDER BY "id" ASC;';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting gifs', error);
    res.sendStatus(500);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('this is req.body favorite post', req.body);
  let queryText = `INSERT INTO "favorites" ("name")
  VALUES ($1);`
 pool.query(queryText, [req.body.url]).then(result => {
   res.sendStatus(200)
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
