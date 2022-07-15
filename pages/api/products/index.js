import Database from "../../../db/databse"
import RequestHandler from "../../../helpers/RequestsHandler"
import Product from "../../../models/Porduct"

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withoutIdParams(req, res, Product)
}