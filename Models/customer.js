const mongoose= require('mongoose');
const schema=mongoose.Schema;

const customerSchema = new schema({
    CustomerName: String,
    CustomerPhone: String,
    CustomerAni:Date,
    CustomerBDay:Date
});

module.exports = mongoose.model('Customer', customerSchema,'Customer');