const customers=require('../Models/customer');

const getAllCustomers= function(next)
{
    return customers.find({},next);
}


module.exports.getAllCustomers=getAllCustomers;