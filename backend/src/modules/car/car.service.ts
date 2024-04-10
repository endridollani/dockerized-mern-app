import express from "express";
import { CarModel } from "./car.model";

export namespace CarService {
    export async function findAll(req: express.Request, res: express.Response){
        const cars = await CarModel.find();
        return res.status(200).json(cars).end();
    };

    export async function updateOne(req: express.Request, res: express.Response){
        const payload = req.body;
        const updatedCar = await CarModel.updateOne(payload);
        return res.status(200).json(updatedCar).end();
    }

    export async function createOne(req: express.Request, res: express.Response){
        const payload = req.body;
        const createdCar = await CarModel.create(payload);
        return res.status(200).json(createdCar).end();
    }

    export async function deleteCar(req: express.Request, res: express.Response){
        const { id } = req.params;
        const deletedCar = await CarModel.findOneAndDelete({_id: id});
        return res.status(200).json(deletedCar).end();
    }
}