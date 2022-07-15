import Database from "../../../db/Database"
import RequestHandler from "../../../helpers/RequestsHandler"
import Admin from "../../../models/Admin"

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withIdParams(req, res, Admin)
}
