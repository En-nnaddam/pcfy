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
    commands: [{ type: mongoose.Types.ObjectId, ref: 'commands' }],
    products: [{ type: mongoose.Types.ObjectId, ref: 'products' }]
})

const Seller = mongoose.models.sellers || mongoose.model('sellers', sellerSchema)

module.exports = Seller