const customers=require('../Models/customer');

const getAllCustomers= function(next)
{
    return customers.find({},next);
}
const getCustomer= function(id,next)
{
    return customers.findOne({customerName:id},next);
}


module.exports.getAllCustomers=getAllCustomers;
module.exports.getCustomer=getCustomer;