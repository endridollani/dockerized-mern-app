import React, { useEffect, useState } from 'react';
import Page from '../../components/page/Page';
import { RootState, useAppDispatch } from '../../state/store';
import { connect } from 'react-redux';
import { Car } from '../types';
import { fetchCars } from '../thunk/fetchCars';
import { CarsSelectors } from '../entities/carsSelectors';
import { clearCars } from '../entities/carsSlice';
import { Box } from '@mui/material';
import BaseTypography from '../../components/baseTypography/BaseTypography';

interface DashboardPageProps {
    cars: Car[];
}

const DashboardPage:React.FC<DashboardPageProps> = ({ cars }) => {
    const dispatch = useAppDispatch();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }
    }, [])

    useEffect(() => {
        if (!mounted) {
            return;
        }
        dispatch(fetchCars());

        return () => {
            dispatch(clearCars());
        }
    }, [mounted]);


    return (
        <Page headerTitle='Dashboard'>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: "wrap", height: '80vh', overflowY: 'scroll', position: 'relative'}}> 
            {cars.map((car) => (
                <Box key={car._id} sx={{width: '250px', height: "350px", p: '1rem', backgroundColor: 'white', borderRadius: '4px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <BaseTypography variant='h6' textTransform='capitalize'>{car?.Name}</BaseTypography>
                    </Box>
                    <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Miles per gallon:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Miles_per_Gallon}</BaseTypography>
                    </Box>
                    <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Cylinders:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Cylinders}</BaseTypography>
                    </Box>
                    <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Displacement:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Displacement}</BaseTypography>
                    </Box>  <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Horsepower:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Horsepower}</BaseTypography>
                    </Box>  <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Weight in lbs:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Weight_in_lbs}</BaseTypography>
                    </Box>  <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Acceleration:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Acceleration}</BaseTypography>
                    </Box>
                    <Box sx={{mt: '1rem', display: 'flex', gap: '1rem'}}>
                        <BaseTypography variant='body2' fontWeight={600}>Origin:</BaseTypography>
                        <BaseTypography variant='body2'>{car.Origin}</BaseTypography>
                    </Box>
                </Box>
            ))}
            </Box>
        </Page>
    );
}
 
const mapStateToProps = (state: RootState): DashboardPageProps => {
    const cars  = CarsSelectors.selectAll(state);

    return {
        cars
    }
}

export default connect(mapStateToProps)(DashboardPage);