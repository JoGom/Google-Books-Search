const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoutes = reuire("./search")

// Book routes
router.use("/books", bookRoutes);

// Search route
router.use("/search", searchRoutes);

module.exports = router;
