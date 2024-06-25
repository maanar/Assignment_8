import { Schema, Types , model} from "mongoose";


const schema = new Schema({
    name: {
        type: String,
        require:true
      },
      bio: {
        type: String,
      },
      birthDate: {
        type: Date
      },
      books: [
        {
          type: Types.ObjectId,
          ref: "Book",
        },
      ]
})

export const Author = model('Author', schema)