import React, {  } from 'react';
import { Box, Skeleton } from '@mui/material';

const DashboardCellSkeletonCard: React.FC = () => (
    <Box sx={{ mt: '.2rem',display: 'flex', flexDirection: 'column', gap: '1rem', width: '25rem', height: '28rem', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', p: '1rem 0'}}>
            <Skeleton sx={{ width: '80%', height: '3rem'}}/>
        </Box>
        <Box sx={{ p: '0 1rem', display: 'grid', columnGap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '2rem'}}>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
            <Skeleton  sx={{ height: '2rem'}}/>
        </Box>
    </Box>
)

const DashboardCellSkeleton: React.FC = () => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
        <DashboardCellSkeletonCard />
        <DashboardCellSkeletonCard />
        <DashboardCellSkeletonCard />
        <DashboardCellSkeletonCard />
        <DashboardCellSkeletonCard />
        <DashboardCellSkeletonCard />
    </Box>
)


export default DashboardCellSkeleton;