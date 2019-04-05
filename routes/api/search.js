const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
.route("/")
.get(booksController.search);

module.exports = router;
