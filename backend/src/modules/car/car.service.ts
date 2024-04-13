import express from "express";
import { CarModel } from "./car.model";
export default class CarService {

   
    async findAll(req: express.Request, res: express.Response){
        const cars = await CarModel?.find();
        return res.status(200).json(cars).end();
    };

    async updateOne(req: express.Request, res: express.Response){
        const payload = req.body;
        const updatedCar =  await CarModel.updateOne(payload);
        return res.status(200).json(updatedCar).end();
    }

    async createOne(req: express.Request, res: express.Response){
        const payload = req.body;
        const createdCar = await CarModel.create(payload);
        return res.status(200).json(createdCar).end();
    }

    async deleteCar(req: express.Request, res: express.Response){
        const { id } = req.params;
        const deletedCar =  await CarModel.findOneAndDelete({_id: id});
        return res.status(200).json(deletedCar).end();
    }
}