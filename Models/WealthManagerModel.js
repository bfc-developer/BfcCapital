const mongoose = require('mongoose');

 
/* Creating the schema with name, email, password and date */
const WealthManagerModel = new mongoose.Schema({
    Name: {
      type: String,
    //   required: true
    },
    Mobile: {
      type: Number,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    PostAppliedFor: {
      type: String,
      required: true
    },
    Cv: {
        type: String
      }
  });
   
  /* Exporting schema with collection as CrudOperations */
  const User = mongoose.model('wealth_manager', WealthManagerModel);
   
  module.exports = User;