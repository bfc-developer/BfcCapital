const mongoose = require('mongoose');

 
/* Creating the schema with name, email, password and date */
const VertualRelationManagerModel = new mongoose.Schema({
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
  const User = mongoose.model('vertual_relationship_manager', VertualRelationManagerModel);
   
  module.exports = User;