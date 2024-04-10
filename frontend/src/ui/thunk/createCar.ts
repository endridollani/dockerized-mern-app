import { createAsyncThunk } from "@reduxjs/toolkit";

import { CarApiClient } from "../api/CarApiClient";
import { Car } from "../types";
import { fetchCars } from "./fetchCars";

export const createCar = createAsyncThunk<void, Car>("create/car", async (payload, thunkApi) => {
    const response = await CarApiClient.createCar(payload);
    if (response.status === 200) {
        await thunkApi.dispatch(fetchCars());
    }
});