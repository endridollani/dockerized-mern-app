import React, { useMemo } from 'react';
import moment from 'moment';
import { CancelOutlined, InfoOutlined } from '@mui/icons-material';
import { Alert, Box, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Page from '../../../components/page/Page';
import { Car } from '../../types';
import { CustomScroll } from 'react-custom-scroll';
import BaseTypography from '../../../components/baseTypography/BaseTypography';


interface DashboardPageContentProps {
    loading: boolean;
    errored: boolean;
    cars: Car[];
}

const DashboardPageContent: React.FC<DashboardPageContentProps> = 
({ loading, errored, cars }) => {

    const headerRows = cars?.length > 0 && (
        <TableRow>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Name</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Acceleration</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Cylinders</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Displacement</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Horsepower</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'} >Miles per Gallon</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Origin</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Weight in lbs</BaseTypography>
            </TableCell>
            <TableCell>
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Year</BaseTypography>
            </TableCell>
            <TableCell >
                <BaseTypography variant='body1' fontSize={'.8rem'} fontWeight={'bold'}>Details</BaseTypography>
            </TableCell>
        </TableRow>
    );

    const bodyRows =useMemo(() => {
        return (
            <>
                {cars?.length > 0 &&  cars.map((car) => (
                    <TableRow key={car._id}>
                        <TableCell>{car.Name}</TableCell>
                        <TableCell>{car.Acceleration}</TableCell>
                        <TableCell>{car.Cylinders}</TableCell>
                        <TableCell>{car.Displacement}</TableCell>
                        <TableCell>{car.Horsepower}</TableCell>
                        <TableCell>{car.Miles_per_Gallon}</TableCell>
                        <TableCell>{car.Origin}</TableCell>
                        <TableCell>{car.Weight_in_lbs}</TableCell>
                        <TableCell>{moment(car.Year).format('YYYY')}</TableCell>
                        <TableCell>
                            <IconButton>
                                <InfoOutlined />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </>
        );
    }, [cars])

    return (
        <Page headerTitle='Dashboard'>
            <Box sx={{ pb: '.5rem', boxShadow: '0px 4px 4px -5px rgba(0,0,0,0.75)'}}>
                <BaseTypography variant='subtitle2' sx={{ ml: '.4rem'}}>Vehicles</BaseTypography>
            </Box>
            <Box sx={{ mt: '1rem' }}>
                <Box sx={{ width: '100%', height: '80vh'}}>
                    <CustomScroll heightRelativeToParent='100%'>
                        <Box sx={{ pb: '4rem' }}>
                           {loading && (
                            <CircularProgress />
                           )}
                           {cars?.length > 0 && (
                             <TableContainer component={Paper} >
                                <Table>
                                    <TableHead>
                                        {headerRows}
                                    </TableHead>
                                    <TableBody>
                                        {bodyRows}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                           )}
                           {errored && (
                            <Alert variant='filled' color='error'  icon={<CancelOutlined />}>Something went wrong</Alert>
                           )}
                        </Box>
                    </CustomScroll>
                </Box>
            </Box>
        </Page>
    );
}

export default DashboardPageContent;