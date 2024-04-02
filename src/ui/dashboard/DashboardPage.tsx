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
import { CustomScroll } from 'react-custom-scroll';
import moment from 'moment';


interface CellValueProps {
    label: string;
    value: React.ReactNode;
}

const CellValue: React.FC<CellValueProps> = 
({ label, value }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <BaseTypography variant='overline' fontWeight='600' fontSize=".8rem">{label + ' :'}</BaseTypography>
        <BaseTypography variant='body2'>{value}</BaseTypography>
    </Box>
)

interface DashboardCellProps {
    car: Car;
}

const DashboardCell: React.FC<DashboardCellProps> = 
({ car }) => {

    return (
        <Box sx={{ mt: '.2rem',display: 'flex', flexDirection: 'column', gap: '1rem', width: '25rem', height: '28rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: '1rem 0', backgroundColor: '#fff3e6', borderTopRightRadius: '8px', borderTopLeftRadius: '8px'}}>
                <BaseTypography variant='subtitle2' sx={{textTransform: 'capitalize', fontSize: '1.2rem', whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}>
                    {car.Name}
                </BaseTypography>
            </Box>
            <Box sx={{ p: '0 1rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '2rem'}}>
                <CellValue label='Origin' value={car.Origin} />
                <CellValue label='Acceleration' value={car.Acceleration} />
                <CellValue label='Cylinders' value={car.Cylinders} />
                <CellValue label='Displacement' value={car.Displacement} />
                <CellValue label='Horsepower' value={car.Horsepower} />
                <CellValue label='Miles per Gallon' value={car.Miles_per_Gallon} />
                <CellValue label='Weight in lbs' value={car.Weight_in_lbs} />
                <CellValue label='Year' value={moment(car.Year).format('YYYY')} />
            </Box>
        </Box>
    );
}

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
            <Box sx={{ pb: '.5rem', boxShadow: '0px 4px 4px -5px rgba(0,0,0,0.75)'}}>
                <BaseTypography variant='subtitle2' sx={{ ml: '.4rem'}}>All</BaseTypography>
            </Box>
            <Box sx={{ height: '80vh', mt: '1em'}}>
                <CustomScroll heightRelativeToParent='100%'>
                    <Box sx={{ pb: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                        {cars.map((car) => <DashboardCell key={car._id} car={car} />)}
                    </Box>
                </CustomScroll>
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