import Database from "../../../db/Database"
import RequestHandler from "../../../helpers/RequestsHandler"
import Seller from "../../../models/Seller"

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withoutIdParams(req, res, Seller)
}
