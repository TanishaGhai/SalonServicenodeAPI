const mongoose= require('mongoose');
const schema=mongoose.Schema;

const customerSchema = new schema({
    customerName: String,
    customerPhone: String,
    customerAni:Date,
    customerBDay:Date
});

module.exports = mongoose.model('Customer', customerSchema,'Customer');