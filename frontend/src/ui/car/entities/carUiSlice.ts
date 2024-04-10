import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../../thunk/fetchCars";
import carsUiAdapter from "./carUiAdapters";
import { CarList } from "../../types";

const initialState = {
    carList: carsUiAdapter.getInitialState(),
    selectedIndex: null
}

const carsUiSlice = createSlice({
    name: "carsUiSlice",
    initialState,
    reducers: {
        clearCars: (state) => {
            carsUiAdapter.removeAll(state.carList);
        },
        setSelectedIndex: (state, action) => {
            const { id } = action.payload;
            state.selectedIndex = id;
        },
        removeSelectedIndex: (state) => {
            state.selectedIndex = null;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchCars.fulfilled, (state, action) => {
            const entities  = CarList.mapToEntity(action.payload);
            carsUiAdapter.setAll(state.carList, entities);
        })
    }
});

export const {
    clearCars,
    setSelectedIndex,
} = carsUiSlice.actions;

export const carsUiReducer = carsUiSlice.reducer;
