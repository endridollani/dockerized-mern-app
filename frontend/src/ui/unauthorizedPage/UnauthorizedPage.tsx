import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard')
    }, [])

    return null;
}
 
export default UnauthorizedPage;