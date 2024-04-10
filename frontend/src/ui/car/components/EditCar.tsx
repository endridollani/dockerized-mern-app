import { DateRange, Edit } from '@mui/icons-material';
import { Box, Button, IconButton, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Car } from '../../types';
import ConfirmDialog from '../../components/confirmDialog/ConfirmDialog';
import { DateField, DatePicker, TimeField } from '@mui/x-date-pickers';
import moment from 'moment';
import { isEqual } from 'lodash';



interface EditCarProps {
    car: Car;
}

const EditCar: React.FC<EditCarProps> = 
({ car }) => {
    const [editedCar, setEditedCar] = useState<Car>();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (car?._id) {
            setEditedCar(car);
        }
    }, [car])

    const tooggleVisibility = useCallback(() => setVisible(!visible), [visible]);

    const onConfirm = useCallback(() => {
        console.log("save", {editedCar});
    }, [editedCar])

    const onChange = useCallback((key: string, value: any) => {
        setEditedCar(editedCar ? {...editedCar, [key]: value} : undefined);
    }, [editedCar])

    const disabledSave = isEqual(car, editedCar);

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
                confirmBtn={
                    <Button variant='contained' disabled={disabledSave} onClick={onConfirm}>
                        Save
                    </Button>
                }  
            >
                <Box sx={{ mt: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField 
                            label="Name" 
                            value={editedCar?.Name || null}
                            variant='filled'
                            required
                            onChange={(e) => onChange('Name', parseInt(e.target.value))}
                        />
                        <TextField 
                            label="Acceleration" 
                            type='number' 
                            value={editedCar?.Acceleration || null} 
                            variant='filled' 
                            onChange={(e) => onChange('Acceleration',  parseInt(e.target.value))}
                            required
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField 
                            label="Cylinders"
                            type='number'
                            variant='filled'
                            value={editedCar?.Cylinders}
                            onChange={(e) => onChange('Cylinders', parseInt(e.target.value))}
                            required
                        />
                        <TextField 
                            label="Displacement"
                            type='number'
                            variant='filled'
                            value={editedCar?.Displacement}
                            onChange={(e) => onChange('Displacement',  parseInt(e.target.value))}
                            required
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField 
                            label="Horsepower"
                            type='number'
                            variant='filled'
                            value={editedCar?.Horsepower}
                            onChange={(e) => onChange('Horsepower', parseInt(e.target.value))}
                            required
                        />
                        <TextField 
                            label="Miles per Gallon"
                            type='number'
                            variant='filled'
                            value={editedCar?.Miles_per_Gallon}
                            onChange={(e) => onChange('Miles_per_Gallon',  parseInt(e.target.value))}
                            required
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '1rem'}}>
                        <TextField
                            label="Origin"
                            variant='filled'
                            value={editedCar?.Origin}
                            onChange={(e) => onChange('Origin', e.target.value)}
                            required
                        />
                        <TextField 
                            label="Weight in lbs"
                            type='number'
                            variant='filled'
                            value={editedCar?.Weight_in_lbs}
                            onChange={(e) => onChange('Weight_in_lbs',  parseInt(e.target.value))}
                            required/>
                    </Box>
                    <DatePicker 
                        label='Year'
                        format='YYYY'
                        view='year'
                        views={['year']}
                        closeOnSelect={true}
                        value={(editedCar?.Year ? moment(editedCar?.Year) : null) as any}
                        onChange={(date) => onChange('Year', moment(date).toISOString())}
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