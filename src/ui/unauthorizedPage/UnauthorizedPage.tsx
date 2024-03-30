import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Page from '../../components/page/Page';


const UnauthorizedPage: React.FC = () => {
    const navigate = useNavigate();

    const onClick = () => navigate('/dashboard')

    return (
        <Page headerTitle='Unauthorized'>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant='contained' onClick={onClick}>
                    Back to Dashboard
                </Button>
            </Box>
        </Page>
    );
}
 
export default UnauthorizedPage;