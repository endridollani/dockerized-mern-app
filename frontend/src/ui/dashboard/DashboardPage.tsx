import React from 'react';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

import VMMPage from '../components/VMMPage/VMMPage';
import ResponsiveView from '../components/responsiveView/ResponsiveView';
import DashboardPageContent from './DashboardPageContent';


const DashboardPage: React.FC = () => {

    return (
        <VMMPage
            rightContent={
                <ResponsiveView 
                    desktopViewContent={
                        <Button startIcon={<Add/>} variant='contained' size='small'>
                            Add Vehicle
                        </Button>
                    }
                />
            } 
            headerTitle={<VMMPage.HeaderTitle title='Dashboard'/>}
        >
            <DashboardPageContent />
        </VMMPage>
     );
}
 
export default DashboardPage;