const router = require('express').Router();

const {
  createMovie, getMovies, deleteMovie,
} = require('../controllers/movies');
const { validationCreateMovie, validationMovieById } = require('../middlewares/validation');

router.get('/movies', getMovies);
router.post('/movies', validationCreateMovie, createMovie);
router.delete('/movies/:movieId', validationMovieById, deleteMovie);

module.exports = router;
