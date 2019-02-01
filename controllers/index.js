(function(controllers)
{
    var customersController= require('./customersController');
    controllers.init= function(app)
    {
         customersController.init(app);
    };
})(module.exports)