import React from 'react';
import { Grid } from '@mui/material';

import CarStripe from './components/CarStripe';

interface CarListProps {

}

const CarList: React.FC<CarListProps> = 
() => {
    
    return ( 
        <Grid spacing={'2rem'} container>
            <Grid item xs={12}>
                <CarStripe />
            </Grid>
        </Grid>
    );
}
 
export default CarList;