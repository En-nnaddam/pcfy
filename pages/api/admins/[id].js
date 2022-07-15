import Database from "../../../db/databse"
import Admin from "../../../models/Admin"

Database.connect()

export default async function handler(req, res) {
    const { id } = req.query

    try {
        switch (req.method) {
            case 'GET':
                const admin = await Admin.findById(id)

                res.json({ admin })
                break
            case "DELETE":
                const removedAdmin = await Admin.findByIdAndRemove(id)

                res.json({ admin: removedAdmin })
                break
            default: res.status(400).json({ error: "Bad Request" })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
