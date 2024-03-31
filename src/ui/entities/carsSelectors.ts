import { RootState } from './../../state/store';
import carsAdapter from './carsAdapter';

export namespace CarsSelectors {
    export const {selectAll, selectById, selectEntities, selectIds} = carsAdapter.getSelectors((state: RootState) => state.ui.cars);
}