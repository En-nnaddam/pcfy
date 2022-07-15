import Database from "../../../db/databse"
import RequestHandler from "../../../helpers/RequestsHandler"
import Admin from "../../../models/Admin"

Database.connect()

// export default async function handler(req, res) {
//     try {
//         switch (req.method) {
//             case 'GET':
//                 const admins = await Admin.find()
//                 res.json({ admins })
//                 break
//             case 'POST':
//                 const admin = new Admin(req.body)
//                 await admin.save()

//                 res.status(201).json({ admin })
//                 break
//             default: res.status(400).json({ error: "Bad Request" })
//         }
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

export default async function handler(req, res) {
    RequestHandler.withoutIdParams(req, res, Admin)
}