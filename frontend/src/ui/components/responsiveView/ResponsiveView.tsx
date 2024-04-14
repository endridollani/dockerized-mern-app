import React from 'react';
import { Box, styled } from '@mui/material';

const StyledMobileBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.up(480)]: {
        display: 'none',
    }
}))

const StyledDesktopBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down(769)]: {
        display: 'none',
    }
}))

const StyledTabletpBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down(481)]: {
        display: 'none',
    },
    [theme.breakpoints.up(768)]: {
        display: 'none',
    }
}))

interface ResponsiveViewProps {
    desktopViewContent?: React.ReactNode;
    mobileViewContent?: React.ReactNode;
    tabletViewContent?: React.ReactNode;
    children?: React.ReactNode;
}

const ResponsiveView: React.FC<ResponsiveViewProps> = 
({ mobileViewContent, desktopViewContent, tabletViewContent, children}) => {

    return ( 
        <>
            {mobileViewContent && <StyledMobileBox>{mobileViewContent}</StyledMobileBox>}
            {desktopViewContent && <StyledDesktopBox>{desktopViewContent}</StyledDesktopBox>}
            {tabletViewContent && <StyledTabletpBox>{tabletViewContent}</StyledTabletpBox>}
            {children}
        </>
    );
}
 
export default ResponsiveView;