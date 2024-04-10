import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../../state/store';
import { fetchCars } from '../thunk/fetchCars';
import { clearCars } from '../entities/carsSlice';
import CarPageContent from './CarPageContent';

const CarPage:React.FC = () => {
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
        <CarPageContent loading={loading} errored={errored} />
    );
}

export default CarPage;