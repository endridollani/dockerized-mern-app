import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { RootState, useAppDispatch } from '../../state/store';
import { Car } from '../types';
import { fetchCars } from '../thunk/fetchCars';
import { CarsSelectors } from '../entities/carsSelectors';
import { clearCars } from '../entities/carsSlice';
import DashboardPageContent from './components/DashboardPageContent';

interface DashboardPageProps {
    cars: Car[];
}

const DashboardPage:React.FC<DashboardPageProps> = ({ cars }) => {
    const dispatch = useAppDispatch();
    const [mounted, setMounted] = useState(false);
    const [errored, setErrored] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }
    }, []);

    useEffect(() => {
        if (!mounted) {
            return;
        }
        fetchDashboardCars();

        return () => {
            dispatch(clearCars());
        }
    }, [mounted]);


    async function fetchDashboardCars(){
        try {
            setLoading(true);
            const result = await dispatch(fetchCars());
            if (result.meta.requestStatus === 'rejected') {
                setErrored(true);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <DashboardPageContent loading={loading} errored={errored} cars={cars} />
    );
}
 
const mapStateToProps = (state: RootState): DashboardPageProps => {
    const cars  = CarsSelectors.selectAll(state);

    return {
        cars
    }
}

export default connect(mapStateToProps)(DashboardPage);