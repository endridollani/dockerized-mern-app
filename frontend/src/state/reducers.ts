import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "../ui/entities/carsSlice";

const rootReducers = combineReducers({
    ui: combineReducers({
        cars: carsReducer,
    }
    )
});


export default rootReducers;