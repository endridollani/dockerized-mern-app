import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import BaseTypography from '../../components/baseTypography/BaseTypography';

const CarTableHeader: React.FC = () => {
    return (  
        <TableHead>
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
                <TableCell />
            </TableRow>
        </TableHead>
    );
}
 
export default CarTableHeader;