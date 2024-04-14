import React from 'react';
import { Grid } from '@mui/material';

import DashboardPageContentHeader from './components/DashboardPageContentHeader';
import CarList from '../carList/CarList';

const DashboardPageContent: React.FC = 
() => {
    return (
        <Grid spacing='2rem' container>
            <Grid item xs={12}>
                <DashboardPageContentHeader />
            </Grid>
            <Grid item xs={12}>
                <CarList />
            </Grid>
        </Grid>
    );
}
 
export default DashboardPageContent;