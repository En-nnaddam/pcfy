import RequestHandler from "../../../helpers/RequestsHandler";
import Command from "../../../models/Command";

const { default: Database } = require("../../../db/Database");

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withoutIdParams(req, res, Command)
}