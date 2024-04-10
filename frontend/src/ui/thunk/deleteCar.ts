import { EntityId, createAsyncThunk } from "@reduxjs/toolkit";

import { CarApiClient } from "../api/CarApiClient";
import { fetchCars } from "./fetchCars";

export const deleteCar = createAsyncThunk<void, EntityId>("delete/car", async (id, thunkApi) => {
    const response = await CarApiClient.deleteCar(id);
    if (response.status === 200) {
        await thunkApi.dispatch(fetchCars());
    }
});