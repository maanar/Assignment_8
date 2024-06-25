import express from "express";
import { dbConn } from "./database/datadbaseconn.js";
import authorRouter from "./src/modules/author/author.routes.js";
import bookRouter from "./src/modules/books/books.routes.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/author' , authorRouter)
app.use('/book', bookRouter)
app.get("/", (req, res) => res.send("Helloworld"));

app.listen(port, () => {
  console.log(`server is running....... on ${port}`);
});