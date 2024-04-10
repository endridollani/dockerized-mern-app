import React from 'react';
import { Box } from '@mui/material';

import EditCar from './EditCar';
import DeleteCar from './DeleteCar';
import { RootState } from '../../../state/store';
import { CarList } from '../../types';
import { CarsUiSelectors } from '../entities/carUiSelectors';
import { connect } from 'react-redux';

interface CarRowActionsProps {
    car: CarList.CarListItem;
}

interface CarRowActionsOwnProps {
    index: string;
}

const CarRowActions: React.FC<CarRowActionsProps & CarRowActionsOwnProps> = 
({ index , car }) => {
    return ( 
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem'}}>
            <EditCar car={car} />
            <DeleteCar car={car} />
        </Box>
     );
}

const mapStateToProps = (state: RootState, ownProps: CarRowActionsOwnProps): CarRowActionsProps => {
    const car = CarsUiSelectors.selectById(state, ownProps.index);

    return {
        car
    }
}
 
export default connect(mapStateToProps)(CarRowActions);