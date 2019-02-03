(function(controllers)
{
    var customersController= require('./customersController');
    var billsController= require('./billController');
    controllers.init= function(app)
    {
         customersController.init(app);
         billsController.init(app);
    };

})(module.exports)