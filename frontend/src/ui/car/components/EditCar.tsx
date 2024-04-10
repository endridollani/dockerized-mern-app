import React, { useCallback, useEffect, useState } from 'react';
import { Edit } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { isEqual, isNil } from 'lodash';

import { Car } from '../../types';
import ConfirmDialog from '../../components/confirmDialog/ConfirmDialog';
import { useAppDispatch } from '../../../state/store';
import { updateCar } from '../../thunk/updateCar';
import CarEditableForm from '../shared/CarEditableForm';



interface EditCarProps {
    car: Car;
}

const EditCar: React.FC<EditCarProps> = 
({ car }) => {
    const dispatch = useAppDispatch();
    const [editedCar, setEditedCar] = useState<Car>();
    const [visible, setVisible] = useState(false);
    const [errored, setErrored] = useState(false);

    useEffect(() => {
        if (car?._id) {
            setEditedCar(car);
        }
    }, [car])

    const tooggleVisibility = useCallback(() => {
        if (!visible) {
            setErrored(false);
            setEditedCar(car);
        }
        setVisible(!visible)
    } , [visible, car]);

    const onConfirm = useCallback(() => {
        if (!isNil(editedCar) &&  Object.values(editedCar)?.filter((e) => !String(e || '')?.length)?.length - 1){
            setErrored(true);
            return;
        } else if (!isNil(editedCar)) {
            dispatch(updateCar(editedCar))
            tooggleVisibility();
        }
    }, [editedCar])

    const onChange = useCallback((key: string, value: any) => {
        setEditedCar({...(editedCar || {}), [key]: value} as Car);
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
              <CarEditableForm car={editedCar} onChange={onChange} errored={errored} />
            </ConfirmDialog>
        </> 
    );
}
 
export default EditCar;