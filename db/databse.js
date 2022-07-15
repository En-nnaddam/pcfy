const mongoose = require("mongoose")

export default class Database {
    static connect() {
        if (mongoose.connection.readyState === 1) return
        mongoose.connect(process.env.MONGO_URI)
            .catch(error => console.log('Database Error Connection:', error.message))
    }

    static disconnect() {
        if (mongoose.connection.readyState === 0) return
        mongoose.connection.close()
    }
}