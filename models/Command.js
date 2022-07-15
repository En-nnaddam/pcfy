const mongoose = require("mongoose");

const commandSchema = mongoose.Schema({
    products: [{ type: ObjectId, ref: 'product' }],
    status: {
        type: String,
        // enum: ['']
    }

}, { timestamps: true })

const Command = mongoose.models.command || mongoose.model('commands', commandSchema)

module.exports = Command