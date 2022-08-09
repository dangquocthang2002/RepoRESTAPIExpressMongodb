const {Book,Author} = require("../model/model");


const bookController = {
    addABook: async (req,res) => {
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if(req.body.author) {
                const author = Author.find({_id:req.body.author});
                //const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books: saveBook._id}});
            }
            res.status(200).json(saveBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
            
        }
    },
    getABookById : async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);

        } catch (error) {
            res.status(500).json(err);
            
        }
    },
    updateBookById : async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body});
            res.status(200).json("Updated Successfully");
        } catch (error) {
            res.status(500).json(err);
            
        }
    },
    deleteBookById : async (req, res) => {
        try {
            await Author.updateMany(
                {books:req.params.id},
                {$pull: {books:req.params.id}}
            );
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");


        } catch (error) {
            res.status(500).json(err);            
        }
    }
};

module.exports = bookController;