const mongoose = require('mongoose');

 
/* Creating the schema with name, email, password and date */
const ContactModel = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    mobile: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    message: {
        type: String,
        required: true
      }
  });
   
  /* Exporting schema with collection as CrudOperations */
  const User = mongoose.model('contact_form', ContactModel);
   
  module.exports = User;