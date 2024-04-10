import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { CarList } from '../../types';

interface EditCarProps {
    car: CarList.CarListItem;
}

const EditCar: React.FC<EditCarProps> = 
({ car }) => {
    return ( 
        <IconButton>
            <Edit sx={{ width: '1rem', height: '1rem' }}/>
        </IconButton>
    );
}
 
export default EditCar;