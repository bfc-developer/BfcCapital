const mongoose = require('mongoose');

 
/* Creating the schema with name, email, password and date */
const ContactUsModel = new mongoose.Schema({
    FullName: {
      type: String,
    //   required: true
    },
    MobileNumber: {
      type: Number,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    Subject: {
      type: String,
      required: true
    },
    Message: {
        type: String
      }
  });
   
  /* Exporting schema with collection as CrudOperations */
  const User = mongoose.model('contact_us', ContactUsModel);
   
  module.exports = User;