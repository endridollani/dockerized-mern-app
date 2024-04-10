import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "../ui/entities/carsSlice";
import { carsUiReducer } from "../ui/car/entities/carUiSlice";

const rootReducers = combineReducers({
    entities: combineReducers({
        cars: carsReducer,
    }),
    ui: combineReducers({
        carsUI: carsUiReducer,
    }
    )
});


export default rootReducers;