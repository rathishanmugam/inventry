const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = new Schema({
    customerId: {type: Number, default: 0},
    customerName: {type: String, required: true},
    phoneNo: {type: Number, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true}
},
    {
    collection: 'customer'
})

const customer = mongoose.model('Customer', customerSchema)

module.exports = customer
