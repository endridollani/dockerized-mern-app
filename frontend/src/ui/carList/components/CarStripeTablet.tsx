import React, { useCallback, useRef, useState } from 'react';
import { ViewComfy } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Rating } from '@mui/material';
import BaseTypography from '../../components/baseTypography/BaseTypography';
import { CarStripeProps } from './CarStripe';

const img='https://parkers-images.bauersecure.com/wp-images/21753/cut-out/930x620/pug_207_hatch.jpg'
const desc = "The 207 was based on a modified version of the platform used for the Citroën C3 and was built in Poissy (France), Madrid (Spain) and a new plant in Trnava, Slovakia.";
const nm = "Peugeot 207 Hatchback 2008";

interface CarStripeTabletProps {
    onViewDetailsCallback: (carId: string) => void;
}

const CarStripeTablet: React.FC<CarStripeTabletProps & CarStripeProps> = 
({onViewDetailsCallback, image , name, description}) => {
    const [open, setOpen] = useState(false);
    const anchorEl = useRef<any>();

    const toogleOpen = useCallback(() => setOpen(!open), [open])

    return ( 
        <Card variant='outlined' >
            <CardMedia
                component="img"
                sx={{ height: 140}}
                image={image || img}
                alt="Live from space album cover"
            />
            <CardContent >
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <CardHeader subheader={
                        <Rating
                            name="simple-controlled"
                            value={3}
                            readOnly
                        />
                    } 
                    title={name || nm}
                    action={
                        <Box>
                            <IconButton aria-label="settings"  onClick={toogleOpen}  ref={anchorEl}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl.current}
                                open={open}
                                onClose={toogleOpen}
                            >
                                <MenuItem onClick={toogleOpen}>Edit</MenuItem>
                                <MenuItem onClick={toogleOpen}>Delete</MenuItem>
                            </Menu>
                        </Box>
                    }/>
                    <CardContent>
                        <BaseTypography >
                            { description || desc}
                        </BaseTypography>
                    </CardContent>
                </Box>
                <CardActions>
                    <Button size="small" startIcon={<ViewComfy />} onClick={() => onViewDetailsCallback("123")}>View Details</Button>
                
                </CardActions>
            </CardContent>
        </Card>
    );
}
 
export default CarStripeTablet;