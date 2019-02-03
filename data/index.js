(function(data)
{
    var customersService= require('./cusomerService');
    var billsService= require('./billService');
    data.getAllCustomers= function(next)
    {

        return customersService.getAllCustomers(next);
    }
    data.getCustomer= function(id,next)
    {

        return customersService.getCustomer(id,next);
    }

   
    data.getAllBills= function(next)
    {

        return billsService.getAllBills(next);
    }
    data.getBillsCustomer= function(id,next)
    {

        return billsService.getBillsCustomer(id,next);
    }

})(module.exports)