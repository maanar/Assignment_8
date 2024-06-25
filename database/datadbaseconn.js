import { connect } from "mongoose";


export  const dbConn =  connect('mongodb://127.0.0.1:27017/mongoose')
.then(()=>{
  console.log('database connected successfully.');
})
