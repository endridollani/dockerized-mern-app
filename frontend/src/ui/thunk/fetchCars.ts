import { createAsyncThunk } from "@reduxjs/toolkit";

import { CarApiClient } from "../api/CarApiClient";
import { Car } from "../types";

export const fetchCars = createAsyncThunk<Car[]>("fetch/cars", async () => {
        const response = await CarApiClient.getCars();
        return response.data;
});