import  React from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';


const BaseTypographyStyled = styled(Typography)(({theme}) => ({
    
}))

interface BaseTypographyProps extends TypographyProps {
}

const BaseTypography: React.FC<BaseTypographyProps> = (props) => {
    return ( 
        <BaseTypographyStyled {...props} />
    );
}
 
export default BaseTypography;