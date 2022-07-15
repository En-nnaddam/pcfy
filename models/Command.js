const mongoose = require("mongoose");

const commandSchema = mongoose.Schema({
    sellerId: { type: mongoose.Types.ObjectId, ref: 'sellers' },
    products: [{
        productId: { type: mongoose.Types.ObjectId, ref: 'products' },
        quantity: {
            type: Number,
            min: 1,
            default: 1,
        }
    }],
    status: {
        type: String,
        enum: ['vendu', 'en route', 'annuler'],
        default: 'en route'
    }

}, { timestamps: true })

const Command = mongoose.models.commands || mongoose.model('commands', commandSchema)

module.exports = Command