import React from 'react';

import Page from './components/page/Page';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import DashboardPage from './ui/dashboard/DashboardPage';
import UnauthorizedPage from './ui/unauthorizedPage/UnauthorizedPage';


const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<DashboardPage/>} />
      <Route path='*' element={<UnauthorizedPage/>} />
    </Routes>
  </BrowserRouter>
)
 
export default App;
