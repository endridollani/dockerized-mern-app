import React, { useEffect } from 'react';
import Page from '../../components/page/Page';
import { RootState, useAppDispatch } from '../../state/store';
import { connect } from 'react-redux';
import { Car } from '../types';
import { fetchCars } from '../thunk/fetchCars';
import { CarsSelectors } from '../entities/carsSelectors';

interface DashboardPageProps {
    cars: Car[];
}

const DashboardPage:React.FC<DashboardPageProps> = ({cars}) => {
    const dispatch = useAppDispatch();
 
    useEffect(() => {
        dispatch(fetchCars());
    }, [])

    return (
        <Page headerTitle='Dashboard'>
            test
        </Page>
    );
}
 
const mapStateToProps = (state: RootState): DashboardPageProps => {
    const cars = CarsSelectors.selectEntities(state);
    console.log({cars});
    return {
        cars: []
    }
}

export default connect(mapStateToProps)(DashboardPage);