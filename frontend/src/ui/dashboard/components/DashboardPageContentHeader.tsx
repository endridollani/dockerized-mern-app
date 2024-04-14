import React from 'react';
import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

import ResponsiveView from '../../components/responsiveView/ResponsiveView';
import VMMPage from '../../components/VMMPage/VMMPage';

const DashboardPageContentHeader: React.FC = () => {
    const titleContent = (
        <VMMPage.ContentTitle title='Vehicles (0)' />
    );

    const addVehicleBtn = (
        <Button startIcon={<Add/>} variant='contained' size='small'>
            Add Vehicle
        </Button>
    );

    return (
        <ResponsiveView
            desktopViewContent={titleContent}
            tabletViewContent={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {titleContent}
                    {addVehicleBtn}
                </Box>
            }
            mobileViewContent={
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                    {addVehicleBtn}
                    {titleContent}
                </Box>
            }
        />
    );
}

export default DashboardPageContentHeader;