export default class RequestHandler {
    static async withoutIdParams(req, res, Obj) {
        try {
            switch (req.method) {
                case 'GET':
                    const objects = await Obj.find()

                    return res.json({ data: objects })
                case 'POST':
                    const object = new Obj(req.body)
                    await object.save()

                    return res.status(201).json({ data: object })
                default: res.status(400).json({ error: 'Bad Request!' })
            }
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    static async withoutIdParams(req, res, Obj) {
        const { id } = req.query

        try {
            switch (req.method) {
                case 'GET':
                    const object = await Obj.findById(id)

                    return res.json({ data: object })
                case 'PUT':
                    const updated = await Product.findByIdAndUpdate(id, req.body, { new: true })

                    return res.json({ data: updated })
                case "DELETE":
                    const removed = await Obj.findByIdAndRemove(id)

                    return res.json({ data: removed })
                default: res.status(400).json({ error: "Bad Request" })
            }
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}