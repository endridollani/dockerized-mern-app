import React from 'react';
import { CancelOutlined } from '@mui/icons-material';
import { Alert, Box, CircularProgress } from '@mui/material';

import Page from '../components/page/Page';
import BaseTypography from '../components/baseTypography/BaseTypography';
import CarTable from './components/CarTable';


interface CarPageContentProps {
    loading: boolean;
    errored: boolean;
}

const CarPageContent: React.FC<CarPageContentProps> = 
({ loading, errored }) => {

    const content = (
        <Box sx={{ pb: '4rem' }}>
            {loading && (<CircularProgress />)}
            <CarTable />
            {errored && (<Alert variant='filled' color='error'  icon={<CancelOutlined />}>Something went wrong</Alert>)}
        </Box>
    );

    const headerTitle = (
        <Box sx={{ display: 'flex', gap: '.5rem'}}>
            <BaseTypography variant='h5' sx={{ fontWeight: 'bold'}}>VMM</BaseTypography>
            <BaseTypography variant='h5' sx={{ fontWeight: 400, color: '#636172'}}>- Dashboard</BaseTypography>
        </Box>
    );

    return (
        <Page headerTitle={headerTitle}>
            <Box sx={{ pb: '.5rem', boxShadow: '0px 4px 4px -5px rgba(0,0,0,0.75)'}}>
                <BaseTypography variant='subtitle2' sx={{ ml: '.4rem'}}>Vehicles</BaseTypography>
            </Box>
            <Box sx={{ mt: '1rem' }}>
                {content}
           </Box>
        </Page>
    );
}

export default CarPageContent;