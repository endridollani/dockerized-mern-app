import express from 'express';
import logger from '../../common/logger';
import { CarService } from './car.service';

const PATH = "/cars";

const to = (path?: string) => {
    if (!path || path === "/") {
        return PATH;
    }
    return PATH + path;
}

export default (router: express.Router) => {
    logger(`${to("/")}`);
    router.post(to("/"), CarService.findAll);
    router.patch(to("/update"), CarService.updateOne);
    router.post(to("/create"), CarService.createOne);
    router.delete(to("/delete/:id"), CarService.deleteCar);
    return router;
}