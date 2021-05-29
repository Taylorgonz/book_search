const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"


module.exports = router;
