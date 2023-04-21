const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;
