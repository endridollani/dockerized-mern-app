import React from 'react';
import { Box } from '@mui/material';

import EditCar from './EditCar';
import DeleteCar from './DeleteCar';
import { RootState } from '../../../state/store';
import { Car } from '../../types';
import { CarsUiSelectors } from '../entities/carUiSelectors';
import { connect } from 'react-redux';

interface CarRowActionsProps {
    car: Car;
}

interface CarRowActionsOwnProps {
    index: string;
}

const CarRowActions: React.FC<CarRowActionsProps & CarRowActionsOwnProps> = 
({ car }) => {
    return ( 
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem'}}>
            <EditCar car={car} />
            <DeleteCar car={car} />
        </Box>
     );
}

const mapStateToProps = (state: RootState, ownProps: CarRowActionsOwnProps): CarRowActionsProps => {
    const entity = CarsUiSelectors.selectById(state, ownProps.index);

    return {
        car: entity?.car
    }
}
 
export default connect(mapStateToProps)(CarRowActions);