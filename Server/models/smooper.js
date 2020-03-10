const mongoose = require ('mongoose');

const Schema = mongoose.Schema
const smooperSchema = new Schema ({
  id : Number,
  FirstName : String,
  LastName : String,
  PhoneNumber : Number,
  Address : String, 
  City : String,
  Zip : Number,
  Email : String,
  
})

module.exports = mongoose.model ('contacts', smooperSchema,)