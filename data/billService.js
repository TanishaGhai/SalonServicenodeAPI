const bills=require('../Models/Bill');

const getAllBills= function(next)
{
    return bills.find({},next);
}
const getBillsCustomer= function(id,next)
{
    return bills.find({customerId:id},next);
}


module.exports.getAllBills=getAllBills;
module.exports.getBillsCustomer=getBillsCustomer;