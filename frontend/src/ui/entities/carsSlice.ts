import { createSlice } from "@reduxjs/toolkit";
import carsAdapter from "./carsAdapter";
import { fetchCars } from "../thunk/fetchCars";

const carsSlice = createSlice({
    name: "carsSlice",
    initialState: carsAdapter.getInitialState(),
    reducers: {
        clearCars: (state) => carsAdapter.removeAll(state)
    },
    extraReducers: builder => {
        builder
        .addCase(fetchCars.fulfilled, (state, action) => {
            carsAdapter.setAll(state, action.payload);
        })
    }
});

export const {
    clearCars
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
