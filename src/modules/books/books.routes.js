import { Router } from "express";
import { addBook , getBooks ,getBookById , updateBookById ,deleteBook} from "./books.controller.js";





const bookRouter = Router();


bookRouter.post('/' , addBook)
bookRouter.get('/' , getBooks)
bookRouter.get('/:id' , getBookById) 
bookRouter.patch('/:id' , updateBookById)
bookRouter.delete('/:id' , deleteBook)


export default bookRouter;
