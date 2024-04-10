import { EntityId } from "@reduxjs/toolkit";
import { Car } from "../types";
import agent from "./agent";

export namespace CarApiClient {
    export const getCars = async () => {
        return agent.post("/cars");
    };

    export const updateCar = async (payload: Car) => {
        return agent.patch("/cars/update", payload);
    }

    export const createCar = async (payload: Car) => {
        return agent.post("/cars/create", payload);
    }

    export const deleteCar = async (id: EntityId) => {
        return agent.delete(`/cars/delete/${id}`);
    }
}