const mongoose= require('mongoose');
const schema=mongoose.Schema;
var Decimal = require('decimal');

const BillSchema = new schema({
    customerId: String,
    billNo: String,
    billDate:Date,
    billAmt:Number,
    billDisc:Number,
});

module.exports = mongoose.model('Bills', BillSchema,
'Bills');