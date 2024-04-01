import express from "express";
import { CarModel } from "./car.model";

export namespace CarService {
    export async function findAll(req: express.Request, res: express.Response){
        const cars = await CarModel.find();
        return res.status(200).json(cars).end();
    }
}