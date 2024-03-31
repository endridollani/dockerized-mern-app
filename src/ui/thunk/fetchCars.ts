import { createAsyncThunk } from "@reduxjs/toolkit";
import { CarApiClient } from "../api/CarApiClient";

export const fetchCars = createAsyncThunk("fetch/cars", async () => {
        const response = await CarApiClient.getCars();
        return response?.data;
    
});