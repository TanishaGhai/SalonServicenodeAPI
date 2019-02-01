const express= require('express');
var controllers= require('../controllers');

let app=express();

var server= app.listen(3000,function()
 {
     console.log("Express server running on " + server.address().port)
 })

 const init= async() =>
 {
    controllers.init(app);
 }
 module.exports.init=init;
 




 


