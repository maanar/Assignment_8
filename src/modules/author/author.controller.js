import { Author } from "../../../database/models/author.model.js"


// POST request to create a new author.
const addauthor = async (req,res)=>{
    let author = await Author.create(req.body )
    res.json({message:"Success" , author})
}
 
  //  GET request to retrieve all authors
  const getAuthors = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    let authors = await Author.find(req.body).skip((page - 1) * limit)
    .limit(limit)
    .exec();
  const totalCount = await Author.countDocuments();
    res.json({ message: "success! all authors ", currentpage: page,
        totalpages: Math.ceil(totalCount / limit), authors });
  };
  
  
  
  // GET request to retrieve a single author by its ID
  const getAuthorById = async (req, res) => {
    let author = await Author.findById(req.params.id).populate('books');
    if (!author) {
      return res.json({ message: "author not found " });
    }
    res.json({ message: "success!  ", author });
  };
  
  
  
  // PPATCH request to update an author by its ID.
  const updateAuhtorById = async (req, res) => {
    let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!author) {
      return res.status(404).json({ message: "author not found " });
    }
    res.json({ message: "success!  ", author });
  };
  
  
  
  // DELETE request to delete an author by its ID.
  const deleteAuhtor = async (req, res) => {
    let author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "author not found " });
    }
    res.json({ message: "success! Bokk deleted ", author });
  };
export {
    addauthor,
    getAuthors,
    getAuthorById,
    updateAuhtorById,
    deleteAuhtor
}