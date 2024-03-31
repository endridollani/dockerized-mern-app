import express from 'express';
import CarModule from '../modules/car/car.module';

const router = express.Router();

export default (): express.Router => {
  CarModule(router);
  return router;
};