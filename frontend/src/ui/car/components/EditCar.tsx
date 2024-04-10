import { DateRange, Edit } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Car } from '../../types';
import ConfirmDialog from '../../components/confirmDialog/ConfirmDialog';
import { DateField, DatePicker, TimeField } from '@mui/x-date-pickers';
import moment from 'moment';


interface EditCarProps {
    car: Car;
}

const EditCar: React.FC<EditCarProps> = 
({ car }) => {
    const [visible, setVisible] = useState(false);

    const tooggleVisibility = useCallback(() => setVisible(!visible), [visible]);

    const onConfirm = () => {
        console.log("confirm");

    }

    return (
        <>
            <IconButton onClick={tooggleVisibility}>
                <Edit sx={{ width: '1rem', height: '1rem' }}/>
            </IconButton>
            <ConfirmDialog 
                open={visible}
                onClose={tooggleVisibility}
                title={car?.Name}
                cancelText='Cancel'
                confirmText='Save'
                onConfirm={onConfirm}    
            >
                <Box sx={{ mt: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField label="Name" variant='filled' defaultValue={car.Name} required/>
                        <TextField label="Acceleration" variant='filled' defaultValue={car.Acceleration} required/>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField label="Cylinders" variant='filled' defaultValue={car.Cylinders} required/>
                        <TextField label="Displacement" variant='filled' defaultValue={car.Displacement} required/>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField label="Horsepower" variant='filled' defaultValue={car.Horsepower} required/>
                        <TextField label="Miles per Gallon" variant='filled' defaultValue={car.Miles_per_Gallon} required/>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField label="Origin" variant='filled' defaultValue={car.Origin} required/>
                        <TextField label="Weight in lbs" variant='filled' defaultValue={car.Weight_in_lbs} required/>
                    </Box>
                    <DatePicker 
                        label='Year'
                        format='YYYY'
                        view='year'
                        views={['year']}
                        closeOnSelect={true}
                        defaultValue={moment(car?.Year)}
                        openTo="year"
                        slotProps={{
                            textField: {
                                variant: 'filled',
                                required: true,
                                inputProps: {
                                    readOnly: true
                                },
                            },
                        }}
                    />
                </Box>
            </ConfirmDialog>
        </> 
    );
}
 
export default EditCar;