const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const Admin = mongoose.models['admin'] || mongoose.model('admins', adminSchema)

module.exports = Admin