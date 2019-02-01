const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://DBName:DBPassword@cluster0-dbbga.azure.mongodb.net/SalonDB?retryWrites=true&ssl=true';
//let mongoDB = process.env.MONGODB_URI || dev_db_url;

const init= function()
 {
  mongoose.connect(dev_db_url, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + dev_db_url + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + dev_db_url);
    }
  });
  
 }
 module.exports.init=init;

