import { Book } from "../../../database/models/book.model.js";

// POST request to create a new book
const addBook = async (req, res) => {
  let book = await Book.create(req.body);
  res.json({ message: "Success", book });
};

//  GET request to retrieve all books.
const getBooks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  let books = await Book.find(req.body)
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();
  const totalCount = await Book.countDocuments();
  res.json({
    message: "success! all books ",
    currentpage: page,
    totalpages: Math.ceil(totalCount / limit),
    books
    
  });
};

// GET request to retrieve a single book by its ID.
const getBookById = async (req, res) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return res.json({ message: "Book not found " });
  }
  res.json({ message: "success!  ", book });
};

// PATCH request to update a book by its ID.
const updateBookById = async (req, res) => {
  let book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!book) {
    return res.status(404).json({ message: "Book not found " });
  }
  res.json({ message: "success!  ", book });
};

//DELETE request to delete a book by its ID.
const deleteBook = async (req, res) => {
  let book = await Book.findByIdAndDelete(req.params.id);
  if (!book) {
    return res.status(404).json({ message: "Book not found " });
  }
  res.json({ message: "success! Bokk deleted ", book });
};

export { addBook, getBooks, getBookById, updateBookById, deleteBook };
