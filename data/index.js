(function(data)
{
    var customersService= require('./cusomerService');
    data.getAllCustomers= function(next)
    {

        return customersService.getAllCustomers(next);
    }
})(module.exports)