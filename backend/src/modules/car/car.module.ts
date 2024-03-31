import express from 'express';
import CarController from './car.controller';

export default (router: express.Router) => {
    return CarController(router);
}