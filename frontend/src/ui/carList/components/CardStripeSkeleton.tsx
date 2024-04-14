import React from 'react';
import { Box, Card, Grid, Skeleton } from '@mui/material';
import CarStripe from './CarStripe';

const CardStripeSkeleton: React.FC = () => {
    return ( 
        <Grid spacing={'2rem'} container>
            <Grid item xs={12}>
                <Card variant='outlined' sx={{height: '18.625rem'}}>
                    <Box sx={{display: 'flex', gap: '2rem', width: '100%', height: 'inherit'}}>
                        <Box component={Skeleton} variant='rectangular' width={400} height={'100%'}/>
                        <Box mt={'2rem'} sx={{ display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                    <Skeleton variant='rectangular' width={400}/>
                                    <Skeleton variant='rectangular' width={200}/>
                                </Box>
                                <Skeleton variant='circular' width={30} height={30} />
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                                <Skeleton variant='rectangular' width={557} height={80} sx={{ marginTop: '1rem'}}/>
                                <Skeleton variant='rectangular' width={122} height={30}/>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <CarStripe />
            </Grid>
        </Grid>
    );
}
 
export default CardStripeSkeleton;