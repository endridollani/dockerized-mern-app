import React from 'react';
import { CarList } from '../../types';
import { RootState } from '../../../state/store';
import { connect } from 'react-redux';
import CarTableRow from './CarTableRow';
import { Table, TableBody, TableContainer } from '@mui/material';
import CarTableHeader from './CarTableHeader';
import { CarsUiSelectors } from '../entities/carUiSelectors';

interface CarTableProps {
    cars: CarList.CarListItem[];
}

const CarTable:React.FC<CarTableProps> = 
({ cars }) => {
    const children: React.ReactNode[] = [];

    if (!cars?.length) {
        return null;
    }

    for (const car of cars) {
        children.push(<CarTableRow key={car.key} id={car.key} />)
    }

    return (
        <TableContainer sx={{ maxHeight: '80vh'}}>
            <Table stickyHeader>
                <CarTableHeader />
                <TableBody sx={{ overflowY: 'auto'}}>
                    <>
                        {children}
                    </>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = (state: RootState): CarTableProps => {
    const cars = CarsUiSelectors.selectAll(state);

    return {
        cars
    }
}
 
export default connect(mapStateToProps)(CarTable);