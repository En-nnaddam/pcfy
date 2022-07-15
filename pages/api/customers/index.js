import Database from "../../../db/Database"
import RequestHandler from "../../../helpers/RequestsHandler"
import Customer from "../../../models/Customer"

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withoutIdParams(req, res, Customer)
}