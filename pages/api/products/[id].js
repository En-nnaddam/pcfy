import RequestHandler from "../../../helpers/RequestsHandler"
import Product from "../../../models/Porduct"

// export default async function handler(req, res) {
//     const { id } = req.query

//     try {
//         switch (req.method) {
//             case 'GET':
//                 const product = await Product.findById(id)

//                 res.json({ product })
//                 break
//             case 'PUT':
//                 const updated = await Product.findByIdAndUpdate(id, req.body, { new: true })

//                 res.json({ product: updated })
//                 break
//             case 'DELETE':
//                 const deleted = await Product.findByIdAndDelete(id)

//                 res.json({ product: deleted })
//                 break
//             default: res.status(400).json({ error: 'Bad request' })
//         }
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

export default async function handler(req, res) {
    RequestHandler.withoutIdParams(req, res, Product)
}
