const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
    },
    location: String,
    links: [String],
    brand: String,
    commands: [{ type: ObjectId, ref: 'command' }],
    products: [{ type: ObjectId, ref: 'product' }]
})

const Seller = mongoose.models.seller || mongoose.model('sellers', sellerSchema)

module.exports = Seller