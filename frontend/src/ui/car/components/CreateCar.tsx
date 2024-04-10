import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Car } from '../../types';
import { isNil } from 'lodash';
import { useAppDispatch } from '../../../state/store';
import { createCar } from '../../thunk/createCar'
import ConfirmDialog from '../../components/confirmDialog/ConfirmDialog';
import BaseTypography from '../../components/baseTypography/BaseTypography';
import CarEditableForm from '../shared/CarEditableForm';

const CreateCar:React.FC = () => {
    const dispatch = useAppDispatch();
    const [car, setCar] = useState<Car>();
    const [visible, setVisible] = useState(false);
    const [errored, setErrored] = useState(false);

    const tooggleVisibility = useCallback(() => {
        if (!visible) {
            setErrored(false);
            setCar(undefined);
        }
        setVisible(!visible)
    } , [visible]);

    const onCreate = useCallback(() => {
        if (!isNil(car) && Object.values(car)?.length  === 9 && !errored) {
            dispatch(createCar(car));
            tooggleVisibility();
        } else {
            setErrored(true);
        }
    }, [car, errored])

    const onChange = useCallback((key: string, value: any) => {
        setCar({...(car || {}), [key]: value} as Car);
    }, [car])

    return ( 
        <>
            <Button variant='contained' startIcon={<Add sx={{ width: '1rem', height: '1rem' }} />} onClick={tooggleVisibility}>
                <BaseTypography variant='subtitle2' sx={{ textTransform: 'uppercase'}}>Add a new Vehicle</BaseTypography>
            </Button>
            <ConfirmDialog
                open={visible}
                onClose={tooggleVisibility}
                onConfirm={onCreate}
                confirmText='Create'
                title='Add a new vehicle'
            >
                <CarEditableForm car={car} onChange={onChange} errored={errored} />
            </ConfirmDialog>
        </>
     );
}
 
export default CreateCar;