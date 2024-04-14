import React from 'react';
import VMMPage from '../components/VMMPage/VMMPage';
import CarDetailPageContent from './CarDetailsPageContent';
import { useParams } from 'react-router-dom';


const CarDetailsPage: React.FC = () => {
    const { carId } = useParams();

    return ( 
        <VMMPage headerTitle={<VMMPage.HeaderTitle title="Vehicle Details"/>}>
            <CarDetailPageContent carId={carId} />
        </VMMPage>
     );
}
 
export default CarDetailsPage;