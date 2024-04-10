import React from 'react';
import moment from 'moment';
import { isNil } from 'lodash';
import { Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { Car } from '../../types';

interface CarEditableFormProps {
    onChange: (key: string, value: any) => void;
    car?: Car;
    errored?: boolean;
}

const CarEditableForm: React.FC<CarEditableFormProps> = 
({ onChange, car, errored = false }) => {
    return (
        <Box sx={{ mt: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <Box sx={{ display: 'flex', gap: '1rem'}}>
                <TextField 
                    label="Name" 
                    value={car?.Name || ''}
                    variant='filled'
                    required
                    onChange={(e) => onChange('Name', e.target.value)}
                    error={errored && isNil(car?.Name)}
                />
                <TextField 
                    label="Acceleration" 
                    type='number' 
                    value={car?.Acceleration || ''} 
                    variant='filled' 
                    onChange={(e) => onChange('Acceleration',  parseInt(e.target.value))}
                    required
                    error={errored && isNil(car?.Acceleration)}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem'}}>
                <TextField 
                    label="Cylinders"
                    type='number'
                    variant='filled'
                    value={car?.Cylinders || ''}
                    onChange={(e) => onChange('Cylinders', parseInt(e.target.value))}
                    required
                    error={errored && isNil(car?.Cylinders)}
                />
                <TextField 
                    label="Displacement"
                    type='number'
                    variant='filled'
                    value={car?.Displacement || ''}
                    onChange={(e) => onChange('Displacement',  parseInt(e.target.value))}
                    required
                    error={errored && isNil(car?.Displacement)}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem'}}>
                <TextField 
                    label="Horsepower"
                    type='number'
                    variant='filled'
                    value={car?.Horsepower || ''}
                    onChange={(e) => onChange('Horsepower', parseInt(e.target.value))}
                    required
                    error={errored && isNil(car?.Horsepower)}
                />
                <TextField 
                    label="Miles per Gallon"
                    type='number'
                    variant='filled'
                    value={car?.Miles_per_Gallon || ''}
                    onChange={(e) => onChange('Miles_per_Gallon',  parseInt(e.target.value))}
                    required
                    error={errored && isNil(car?.Miles_per_Gallon)}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '1rem'}}>
                <TextField
                    label="Origin"
                    variant='filled'
                    value={car?.Origin || ''}
                    onChange={(e) => onChange('Origin', e.target.value)}
                    required
                    error={errored && isNil(car?.Origin)}
                />
                <TextField 
                    label="Weight in lbs"
                    type='number'
                    variant='filled'
                    value={car?.Weight_in_lbs || ''}
                    onChange={(e) => onChange('Weight_in_lbs',  parseInt(e.target.value))}
                    required
                    error={errored && isNil(car?.Weight_in_lbs)}
                />
            </Box>
            <DatePicker 
                label='Year'
                format='YYYY'
                view='year'
                views={['year']}
                closeOnSelect={true}
                value={(car?.Year ? moment(car?.Year) : null) as any}
                onChange={(date) => onChange('Year', moment(date).toISOString())}
                openTo="year"
                slotProps={{
                    textField: {
                        variant: 'filled',
                        required: true,
                        error: errored && isNil(car?.Year),
                        inputProps: {
                            readOnly: true
                        },
                    },
                }}
            />
        </Box>
    )
}
 
export default CarEditableForm;