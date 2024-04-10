import { createAsyncThunk } from "@reduxjs/toolkit";

import { CarApiClient } from "../api/CarApiClient";
import { Car } from "../types";
import { fetchCars } from "./fetchCars";

export const updateCar = createAsyncThunk<void, Car>("update/car", async (payload, thunkApi) => {
    const response = await CarApiClient.updateCar(payload);
    if (response.status === 200) {
        await thunkApi.dispatch(fetchCars());
    }
});