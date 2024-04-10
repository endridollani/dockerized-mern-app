import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { TableCell, TableRow } from '@mui/material';

import { Car } from '../../types';
import { RootState } from '../../../state/store';
import { CarsUiSelectors } from '../entities/carUiSelectors';
import CarRowActions from './CarRowActions';

interface CarTableRowOwnProps {
    id: string;
}

interface CarTableRowProps {
    car: Car;
}

const CarTableRow: React.FC<CarTableRowProps & CarTableRowOwnProps> = 
({ car }) => {

    return ( 
        <TableRow key={car._id}>
            <TableCell>{car.Name}</TableCell>
            <TableCell>{car.Acceleration}</TableCell>
            <TableCell>{car.Cylinders}</TableCell>
            <TableCell>{car.Displacement}</TableCell>
            <TableCell>{car.Horsepower}</TableCell>
            <TableCell>{car.Miles_per_Gallon}</TableCell>
            <TableCell>{car.Origin}</TableCell>
            <TableCell>{car.Weight_in_lbs}</TableCell>
            <TableCell>{moment(car.Year).format('YYYY')}</TableCell>
            <TableCell>
                <CarRowActions index={car._id} />
            </TableCell>
        </TableRow>
    );
}

const mapStateToProps = (state: RootState, { id }: CarTableRowOwnProps): CarTableRowProps => {
    const entity = CarsUiSelectors.selectById(state, id);

    return {
        car: entity?.car
    }
}
 
export default connect(mapStateToProps,)(CarTableRow);