import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Car } from '../../types';

interface DeleteCarProps {
    car: Car;
}

const DeleteCar:React.FC<DeleteCarProps> = 
({ car }) => {
    return ( 
        <IconButton>
            <Delete sx={{ width: '1rem', height: '1rem' }}/>
        </IconButton>
     );
}
 
export default DeleteCar;