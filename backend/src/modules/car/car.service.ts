import logger from "../../common/logger";
import express from "express";

export namespace CarService {
    export async function findAll(req: express.Request, res: express.Response){
        return res.status(200).json([{
            id: "1",
            name: "hello world"
        }]).end();
    }
}