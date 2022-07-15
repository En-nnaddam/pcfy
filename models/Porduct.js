const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    pictures: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sold: Number,
    sellerId: { type: ObjectId, ref: 'seller' },
    details: [{ title: String, body: String }],
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })

const Product = mongoose.models.product || mongoose.model('products', productSchema)

module.exports = Product