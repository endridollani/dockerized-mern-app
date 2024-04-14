import React, { useCallback, useRef, useState } from 'react';
import { ViewComfy } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Rating } from '@mui/material';
import BaseTypography from '../../components/baseTypography/BaseTypography';
import { CarStripeProps } from './CarStripe';
import ShowMoreText from "react-show-more-text";

const img='https://s1.cdn.autoevolution.com/images/gallery/PEUGEOT207-5doors-4635_6.jpg'
const desc = "The 207 was baseasdas   dsadsads  adsadon a modified version of the platform used for the Citroën C3 and was built in Poissy (France), Madrid (Spain) and a new plant in Trnava, Slovakia.";
const nm = "Peugeot 207 Hatchback 2008";


interface CarStripeDesktopProps {
    onViewDetailsCallback: (carId: string) => void;
}


const CarStripeDesktop: React.FC<CarStripeDesktopProps & CarStripeProps> = 
({ onViewDetailsCallback, image , name, description }) => {
    const [open, setOpen] = useState(false);
    const anchorEl = useRef<any>();

    const toogleOpen = useCallback(() => setOpen(!open), [open])

    return ( 
        <Card variant='outlined' sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: '25rem' }}
                image={image || img}
                alt="Live from space album cover"
            />
            <CardContent sx={{width: '100%'}}>
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
                        <ShowMoreText
                            lines={2}
                            className="content-css"
                            anchorClass="show-more-less-clickable"
                            more={<Button size='small' sx={{textTransform: 'none'}}>See more</Button>}
                            less={<Button size='small' sx={{textTransform: 'none'}}>See less</Button>}
                            expanded={false}
                            truncatedEndingComponent={"... "}
                        >
                            { description || desc}
                        </ShowMoreText>
                    </CardContent>
                </Box>
                <CardActions>
                    <Button size="small" startIcon={<ViewComfy />} onClick={() => onViewDetailsCallback("123")}>View Details</Button>
                
                </CardActions>
            </CardContent>
        </Card>
    );
}
 
export default CarStripeDesktop;