import React, { useEffect } from 'react';
import Page from '../../components/page/Page';


const DashboardPage:React.FC = () => {

    const fechAll = async () => {
        const res = await  fetch("http://localhost:8080/cars", {method: 'post', mode: 'cors'});
        console.log(res.json());
    }

    useEffect(() => {
        fechAll();
    }, [])

    return (
        <Page headerTitle='Dashboard'>
            test
        </Page>
    );
}
 
export default DashboardPage;