require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const logger = require('./utils/logger')(__filename);
const fileUpload = require('express-fileupload');
const FormData = require('form-data');
const bodyParser = require('body-parser');

//new imports
const path = require('path');

// var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });

//APP CONFIG
const app = express();
app.use(cors());

require('./config/db');



//MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//ROUTES
const port = process.env.PORT || 5012;

// @ /api
app.use('/api', require('./routes'))
// @type   GET /
// @access Public 
// @desc   Test Route
// app.get("/", function (req, res) {
//   res.status(200).json({
//     success: true,
//     data: "Server Setup Completed Successfully!!",
//     error: null,
//   });
// });

//LISTEN
// const server = app.listen(port, (err) => {
//   if (err) {
//     // logger.error('Server Crash At Start ' + JSON.stringify(err));
//   } else {
//     console.log('Server started At ' + server.address().port);
//     // logger.debug('Server Start At ' + server.address().port);
//   }
// });

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
);


app.listen(port,()=>{
    console.log(port,"running")
})

