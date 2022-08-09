const bookController = require('../controller/bookController');
const router = require('express').Router();


// Add Books

router.post("/",bookController.addABook);
router.get("/",bookController.getAllBook);
router.get("/:id",bookController.getABookById);

router.put("/:id",bookController.updateBookById);
router.delete("/:id",bookController.deleteBookById);

module.exports = router;