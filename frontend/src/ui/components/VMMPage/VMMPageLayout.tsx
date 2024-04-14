import React from 'react';
import { VMMPageProps } from './VMMPage';
import { Box, Grid, Paper, SxProps, Tab, Tabs, styled } from '@mui/material';
import BaseTypography from '../baseTypography/BaseTypography';
import { CustomScroll } from "react-custom-scroll";
import ResponsiveView from '../responsiveView/ResponsiveView';

const StyledPageBox = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    height: '100dvh',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
}))

const StyledHeaderBox = styled(Box)(({theme}) => ({
    boxShadow: '0 5px 5px -4px rgba(0,0,0,0.26)',
    display: 'flex',
    alignItems: 'center'
}));

export const desktopPadding = "1rem 8rem";
export const mobilePadding = "1.5rem 4rem";
export const tabletpPadding = "1rem 5rem";

const desktopHeaderSx: SxProps = {p: desktopPadding, height: '6rem', maxHeight: '6rem', justifyContent: 'space-between'}
const tabletHeaderSx: SxProps = {p: tabletpPadding, height: '5rem', maxHeight: '5rem', justifyContent: 'space-between'}
const mobileHeaderSx: SxProps = {p: mobilePadding, maxHeight: '4rem', justifyContent: 'center'}

export interface VMMPageLayoutProps extends VMMPageProps {

}

const VMMPageLayout: React.FC<VMMPageLayoutProps> = 
({ headerTitle, rightContent, children }) => {
    return ( 
        <StyledPageBox>
            <Grid spacing={'1rem'} container>
                <Grid item xs={12}>
                    <ResponsiveView
                        desktopViewContent={
                            <StyledHeaderBox sx={{...desktopHeaderSx}}>
                                {headerTitle}
                                {rightContent}
                            </StyledHeaderBox>
                        }
                        mobileViewContent={
                            <StyledHeaderBox sx={{...mobileHeaderSx}}>
                                {headerTitle}
                                {rightContent}
                            </StyledHeaderBox>
                        }
                        tabletViewContent={
                            <StyledHeaderBox sx={{...tabletHeaderSx}}>
                                {headerTitle}
                                {rightContent}
                            </StyledHeaderBox>
                        }
                    />
                </Grid>
                <Grid item xs={12} sx={{ height: '95vh'}}>
                    <CustomScroll heightRelativeToParent='90%'>
                        <ResponsiveView
                                desktopViewContent={
                                    <Box p={desktopPadding}>
                                        {children}
                                    </Box>
                                }
                                mobileViewContent={
                                    <Box p={mobilePadding}>
                                        {children}
                                    </Box>
                                }
                                tabletViewContent={
                                    <Box p={tabletpPadding}>
                                        {children}
                                    </Box>
                                }
                            />
                    </CustomScroll>
                </Grid>
            </Grid>
        </StyledPageBox>
    );
}
 
export default VMMPageLayout;