// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'myapp'
// });
// connection.connect(function (error) {
//   if (!!error) {
//     console.log(error);
//   } else {
//     //console.log('Connected!:)');
//   }
// });
// module.exports = connection; 


///////////
const mongoose = require('mongoose');
main().then(console.log("connected!")).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://mongoadmin:BFCCapital001comIndia@20.204.84.227:27017/bfccapital?authSource=admin&readPreference=primary&directConnection=true&ssl=false');
}
