import { EntityId, createEntityAdapter } from "@reduxjs/toolkit";
import { Car, CarList, CarUIState } from "../../types";

const carsUiAdapter = createEntityAdapter<CarList.CarListItem, EntityId>({
    selectId: (p) => p.key
});

export default carsUiAdapter;