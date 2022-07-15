import Database from "../../../db/Database";
import RequestHandler from "../../../helpers/RequestsHandler";
import Command from "../../../models/Command";

Database.connect()

export default async function handler(req, res) {
    RequestHandler.withIdParams(req, res, Command)
}