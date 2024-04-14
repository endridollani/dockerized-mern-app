import React, { useEffect } from 'react';
import { Box, Breadcrumbs, Link, SvgIcon } from '@mui/material';

import VMMPageLayout from './VMMPageLayout';
import BaseTypography from '../baseTypography/BaseTypography';
import VMMLogo from './VMMLogo';
import { useLocation, useNavigate } from 'react-router-dom';
import { trim } from 'lodash';

export interface VMMPageProps {
    headerTitle?: React.ReactNode;
    rightContent?: React.ReactNode;
    children: React.ReactNode;
}

function VMMPage(props: VMMPageProps) {
    return ( 
        <VMMPageLayout {...props}/>
     );
}

interface PageHeaderTitleProps {
    title: string;
}
const PageHeaderTitle: React.FC<PageHeaderTitleProps> = 
({title}) => {
    useEffect(() =>{
        if (title){
            document.title = `VMM - ${title}`;
        }
    },[title]);
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <VMMLogo />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem'}}>
                <BaseTypography variant='h5' sx={{ fontWeight: 600}}>VMM</BaseTypography>
                <BaseTypography variant='h5' sx={{ fontWeight: 400, color: '#636172'}}>-</BaseTypography>
                <BaseTypography variant='h5' sx={{ fontWeight: 400, color: '#636172'}}>{title}</BaseTypography>
            </Box>
        </Box>
    );
}

VMMPage.HeaderTitle = 
({title}: {title: string}) => {
    return <PageHeaderTitle title={title} />
}

VMMPage.ContentTitle = 
({title, light = false}: {title: string, light?: boolean}) => {
    return (
        <>
            <BaseTypography variant='body2' sx={{ fontSize: '1rem', fontWeight: 600, color: light ? '#636172' : 'unset'}}>{title}</BaseTypography>
        </>
    );
}

 
export default VMMPage;