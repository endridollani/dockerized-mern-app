import  React from 'react';
import { Box, styled } from '@mui/material';

import BaseTypography from '../baseTypography/BaseTypography';

const StyledPageBox = styled(Box)(({ theme }) => ({
    height: '100dvh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
}));

const StyledHeaderBox = styled(Box)(({theme}) => ({
    padding: '2rem 6rem',
    boxShadow: '0 5px 5px -4px rgba(0,0,0,0.26)',
    display: 'flex',
}));

interface PageProps {
    children: React.ReactNode;
    headerTitle?: React.ReactNode;
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <StyledPageBox>
            <StyledHeaderBox>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '.8rem'}}>
                    {props?.headerTitle && props.headerTitle}
                </Box>
            </StyledHeaderBox>
            <Box sx={{ m: '2rem 6rem'}}>
                {props.children}
            </Box>
        </StyledPageBox>
    );
}
 
export default Page;
