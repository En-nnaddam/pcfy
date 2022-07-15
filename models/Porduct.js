import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    pictures: {
        type: [String],
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    sold: Number,
    sellerId: { type: mongoose.Types.ObjectId, ref: 'sellers' },
    details: { type: [{ title: String, body: String }] },
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })

const Product = mongoose.models.products || mongoose.model('products', productSchema)

module.exports = Product