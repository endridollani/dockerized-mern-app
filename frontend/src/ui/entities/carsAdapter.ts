import { EntityId, createEntityAdapter } from "@reduxjs/toolkit";
import { Car } from "../types";

const carsAdapter = createEntityAdapter<Car, EntityId>({
    selectId: (p) => p._id
});

export default carsAdapter;