const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres for use in Add movie form
  const query = `SELECT * FROM "genres" ORDER BY "name" ASC;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error getting GENRES from DB', err);
      res.sendStatus(500)
    })
});

//GET SPECIFIC MOVIE GENRE FROM DB
router.get('/details/:id', (req, res) => {
  console.log('The movie ID selected was', req.params.id)
  //JOIN tables to get relationship between genres
  //and movies
  const query = `SELECT "genres".name
    FROM "genres"
    JOIN "movies_genres"
    ON "genres".id = "movies_genres".genre_id
    JOIN "movies"
    ON "movies_genres".movie_id = "movies".id
    WHERE "movies".id = $1;`;
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })//send back genre rows that have a matching movie ID
    .catch(err => {
      console.log('Error in getting specific movie in router', err)
    })
})

module.exports = router;