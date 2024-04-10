import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@mui/material';
import React from 'react';
import BaseTypography from '../baseTypography/BaseTypography';

interface ConfirmDialogProps extends DialogProps {
    confirmText: string;
    cancelText: string;
    confirmBtn?: React.ReactNode;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = 
( props ) => {
    return ( 
        <Dialog {...props} >
                <DialogTitle id="alert-dialog-title">
                    <BaseTypography variant='body1' sx={{fontSize: '1.5rem', fontWeight: 600, textTransform: 'capitalize'}}>
                       {props?.title || null}
                    </BaseTypography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props?.content || null}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => props?.onClose?.(e, 'backdropClick')}>{props.cancelText}</Button>
                    {props?.confirmBtn ? (
                        <>{props.confirmBtn}</>
                    ): (
                        <Button onClick={(e) => props?.onClose?.(e, 'backdropClick')}>
                            {props.confirmText}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
    );
}
 
export default ConfirmDialog;