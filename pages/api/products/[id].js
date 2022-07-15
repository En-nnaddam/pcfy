import Database from "../../../db/Database"
import RequestHandler from "../../../helpers/RequestsHandler"
import Product from "../../../models/Porduct"

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withIdParams(req, res, Product)
}
