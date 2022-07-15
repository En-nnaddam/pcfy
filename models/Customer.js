import mongoose from 'mongoose'

const customerSchema = mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    location: String,
    city: String,
    codePostal: String,
    firstName: { type: String, required: true },
    lastName: String,
    email: String,
    commands: [{ type: mongoose.Types.ObjectId, ref: 'commands' }]
})

const Customer = mongoose.models.customers || mongoose.model('customers', customerSchema)

export default Customer