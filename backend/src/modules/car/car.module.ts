import express from 'express';
import CarController from './car.controller';

export default (router: express.Router) => {
    const carController = new CarController(router);
    carController.init();
    return carController.getRouter();
}