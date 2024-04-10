import React from 'react';
import { CarList } from '../../types';
import { RootState } from '../../../state/store';
import { connect } from 'react-redux';
import CarTableRow from './CarTableRow';
import { Box, Table, TableBody, TableContainer } from '@mui/material';
import CarTableHeader from './CarTableHeader';
import { CarsUiSelectors } from '../entities/carUiSelectors';
import BaseTypography from '../../components/baseTypography/BaseTypography';

interface CarTableProps {
    cars: CarList.CarListItem[];
}

const CarTable:React.FC<CarTableProps> = 
({ cars }) => {
    const children: React.ReactNode[] = [];

    if (!cars?.length) {
        return (
            <Box sx={{p: '1.5rem', backgroundColor: '#EEEDEB'}}>
                <BaseTypography variant='caption' sx={{ fontStyle: 'italic', color: '#7D7C7C'}}>No vehicle records found!</BaseTypography>
            </Box>
        )
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