import React, { ReactNode } from 'react';
import Page from '../../../components/page/Page';
import { Car } from '../../types';
import { Alert, Box } from '@mui/material';
import BaseTypography from '../../../components/baseTypography/BaseTypography';
import { CustomScroll } from 'react-custom-scroll';
import { CancelOutlined } from '@mui/icons-material';
import DashboardCellSkeleton from './DashboardCellSkeleton';
import DashboardCell from './DashboardCell';


interface DashboardPageContentProps {
    loading: boolean;
    errored: boolean;
    cars: Car[];
}

const DashboardPageContent: React.FC<DashboardPageContentProps> = 
({ loading, errored, cars }) => {

    let content: ReactNode = null;

    if (loading) {
        content = <DashboardCellSkeleton />;
    } else if (errored) {
        content = <Alert icon={<CancelOutlined/>} color='error' variant='filled' sx={{ mt: '1rem'}}>Failed to fetch cars</Alert>;
    } else {
        if (cars.length) {
            content = (
                <Box sx={{ width: '100%', height: '80vh'}}>
                    <CustomScroll heightRelativeToParent='100%'>
                        <Box sx={{ pb: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                            {cars.map((car) => (<DashboardCell key={car._id} car={car} />))}
                        </Box>
                    </CustomScroll>
                </Box> 
            );
        } else {
           content = <BaseTypography variant='body2' fontStyle='italic'>There are no cars.</BaseTypography>
        }
    }

    return (
        <Page headerTitle='Dashboard'>
            <Box sx={{ pb: '.5rem', boxShadow: '0px 4px 4px -5px rgba(0,0,0,0.75)'}}>
                <BaseTypography variant='subtitle2' sx={{ ml: '.4rem'}}>All</BaseTypography>
            </Box>
            <Box sx={{ mt: '1rem' }}>
                { content }
            </Box>
        </Page>
    );
}

export default DashboardPageContent;