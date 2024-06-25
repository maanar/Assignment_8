import { Router } from "express";
import { addauthor , getAuthors , getAuthorById , updateAuhtorById, deleteAuhtor} from "./author.controller.js";




const authorRouter = Router();


authorRouter.post('/' , addauthor)
authorRouter.get('/' , getAuthors)
authorRouter.get('/:id' , getAuthorById) 
authorRouter.patch('/:id' , updateAuhtorById)
authorRouter.delete('/:id' , deleteAuhtor)


export default authorRouter;
