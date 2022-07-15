const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    }
})

const Admin = mongoose.models['admins'] || mongoose.model('admins', adminSchema)

module.exports = Admin