import express from 'express';
import logger from '../../common/logger';
import CarService from './car.service';

const PATH = "/cars";

const to = (path?: string) => {
    if (!path || path === "/") {
        return PATH;
    }
    return PATH + path;
}

export default class CarController{
    private carService: CarService;
    private router: express.Router;
    
    constructor(router: express.Router){
        this.carService = new CarService();
        this.router = router;
    }

    init(){
        logger(`${to("/")}`);
        this.router.post(to("/"), this.carService.findAll);
        this.router.patch(to("/update"), this.carService.updateOne);
        this.router.post(to("/create"), this.carService.createOne);
        this.router.delete(to("/delete/:id"), this.carService.deleteCar);
    }

    getRouter(){
        return this.router;
    }
}