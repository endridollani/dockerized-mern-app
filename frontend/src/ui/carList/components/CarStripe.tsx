import React from 'react';
import ResponsiveView from '../../components/responsiveView/ResponsiveView';
import CarStripeTablet from './CarStripeTablet';
import CarStripeMobile from './CarStripeMobile';
import CarStripeDesktop from './CarStripeDesktop';
import { useNavigate } from 'react-router-dom';

export interface CarStripeProps {
    image?: string;
    name?: string;
    description?: string;
}

const CarStripe: React.FC<CarStripeProps> = 
(props) => {

    const navigate = useNavigate();

    const onViewDetailsCallback = (carId: string) => {
        navigate(`/cardetails/${carId}`);
    };

    return ( 
        <ResponsiveView
            mobileViewContent={
                <CarStripeMobile {...props} onViewDetailsCallback={onViewDetailsCallback}/>
            }
            tabletViewContent={
               <CarStripeTablet {...props} onViewDetailsCallback={onViewDetailsCallback}/>
            }
            desktopViewContent={
                <CarStripeDesktop {...props} onViewDetailsCallback={onViewDetailsCallback}/>
            }
        />
    );
}

export default CarStripe;