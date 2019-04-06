const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios");
// const searchRoutes = require("./search")

// Book routes
router.use("/books", bookRoutes);

// Search route
router.use("/search", function(req, res) {
      console.log("search controller ran");
      console.log({params: req.query});
      axios
      .get("https://www.googleapis.com/books/v1/volumes", { params: req.query})
      .then(({data: { items }}) => res.json(items))
      .catch(err => res.status(422).json(err));
    });

module.exports = router;
