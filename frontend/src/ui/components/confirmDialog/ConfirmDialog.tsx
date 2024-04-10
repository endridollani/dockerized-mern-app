import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@mui/material';
import React from 'react';
import BaseTypography from '../baseTypography/BaseTypography';

interface ConfirmDialogProps extends DialogProps {
    onConfirm: () => void;
    confirmBtn?: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = 
({confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, confirmBtn, ...otherProps}) => {
    return ( 
        <Dialog {...otherProps} sx={{...otherProps?.sx, height: 'fit-content'}} >
                <DialogTitle id="alert-dialog-title">
                    <BaseTypography variant='body1' sx={{fontSize: '1.5rem', fontWeight: 600, textTransform: 'capitalize'}}>
                       {otherProps?.title || null}
                    </BaseTypography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {otherProps?.content || null}
                    </DialogContentText>
                    {otherProps?.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => otherProps?.onClose?.(e, 'backdropClick')}>{cancelText}</Button>
                    {confirmBtn ? (
                        <>{confirmBtn}</>
                    ): (
                        <Button variant='contained' onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
    );
}
 
export default ConfirmDialog;