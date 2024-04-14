import React, { useEffect, useState } from 'react';
import { isNil } from 'lodash';
import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, CardMedia, FilledInput, Grid, IconButton, Paper, Tab, Tabs, styled } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BaseTypography from '../components/baseTypography/BaseTypography';
import VMMPage from '../components/VMMPage/VMMPage';
import { Link } from 'react-router-dom';
import { ArrowRight, CarRepair, CastForEducation, Details, Edit, Info, InfoOutlined, Mode, ModeOutlined, PhotoCamera, Upload, UploadFile } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ImageUploading from 'react-images-uploading';

interface CarDetailPageContentProps {
    carId?: string;
}

const StyledInp = styled('input')({
    '&::-webkit-file-upload-button': {
        display: 'none'
    },
    '&::file-selector-button': {
        display: 'none'
    },
})

const img='https://s1.cdn.autoevolution.com/images/gallery/PEUGEOT207-5doors-4635_6.jpg'
const desc = "The 207 was baseasdas   dsadsads  adsadon a modified version of the platform used for the Citroën C3 and was built in Poissy (France), Madrid (Spain) and a new plant in Trnava, Slovakia.";
const nm = "Peugeot 207 Hatchback 2008";

const CarDetailPageContent: React.FC<CarDetailPageContentProps> = 
({ carId }) => {

    const [activeTab, setActiveTab] = useState('1');

    useEffect(() => {
        if (!isNil(carId)) {
            //fetch car
            console.log({carId})
        }
    }, [carId]);

    return ( 
        <Grid spacing={'2rem'} container>
            <Grid item xs={12}>
                <Breadcrumbs >
                    <Link to='dashboard' style={{ textDecoration: 'none'}}>
                        <VMMPage.ContentTitle title='Dashboard' light/>
                    </Link>
                    <Box sx={{opacity: '.6'}}>
                        <VMMPage.ContentTitle title='Vehicle details' light/>
                    </Box>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={3} sx={{columnSpan: 2}}>
                <Card variant='outlined'>
                    <CardMedia
                        component="img"
                        sx={{ height: '10rem' }}
                        image={img}
                        alt="Live from space album cover"
                    />
                    <CardContent>
                    <div >
                        <StyledInp
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onSelect={(e) => e}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                    </div>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={9}>
                <Card variant='outlined' sx={{padding: '2rem'}}>
                    <CardHeader title={nm} avatar={<InfoOutlined />} action={<IconButton size='small'><ModeOutlined /></IconButton>}/>
                    <CardContent>
                        {desc}
                    </CardContent>
                </Card>
            </Grid>
            
        </Grid>
    );
}
 
export default CarDetailPageContent;