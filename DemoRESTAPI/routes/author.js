const authorController = require('../controller/authorController');

const router = require('express').Router();


// Add author


router.post("/",authorController.addAuthor);

// Get ALl author

router.get("/",authorController.getAllAuthors);
router.get("/:id",authorController.getAuthorByID);

router.put("/:id",authorController.updateAuthor);
router.delete("/:id",authorController.deleteAuthor);

module.exports = router;