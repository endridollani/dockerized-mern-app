import { RootState } from '../../../state/store';
import carsUiAdapter from './carUiAdapters';

export namespace CarsUiSelectors {
    export const {selectAll, selectById, selectEntities, selectIds} = carsUiAdapter.getSelectors((state: RootState) => state?.ui?.carsUI.carList);
}