import { Delete } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Car } from '../../types';
import { isNil } from 'lodash';
import { useAppDispatch } from '../../../state/store';
import { deleteCar } from '../../thunk/deleteCar'
import ConfirmDialog from '../../components/confirmDialog/ConfirmDialog';
import BaseTypography from '../../components/baseTypography/BaseTypography';

interface DeleteCarProps {
    car: Car;
}

const DeleteCar:React.FC<DeleteCarProps> = 
({ car }) => {
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);

    const tooggleVisibility = useCallback(() => setVisible(!visible) , [visible]);

    const onDelete = useCallback(() => {
        if (!isNil(car)){
            dispatch(deleteCar(car._id));
            tooggleVisibility();
        }
    }, [car])

    return ( 
        <>
            <IconButton onClick={tooggleVisibility}>
                <Delete sx={{ width: '1rem', height: '1rem' }}/>
            </IconButton>
            <ConfirmDialog
                open={visible}
                onClose={tooggleVisibility}
                onConfirm={onDelete}
                title='Delete Record'
            >
                <Box sx={{display: 'flex', gap: '.2rem'}}>
                    <BaseTypography variant='body2'>Do you want to delete</BaseTypography>
                    <BaseTypography variant='body2' fontWeight={600} textTransform='capitalize'>{car?.Name}</BaseTypography>
                    <BaseTypography variant='body2'>record ?</BaseTypography>
                </Box>
            </ConfirmDialog>
        </>
     );
}
 
export default DeleteCar;