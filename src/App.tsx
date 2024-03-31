import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import DashboardPage from './ui/dashboard/DashboardPage';
import UnauthorizedPage from './ui/unauthorizedPage/UnauthorizedPage';
import { store } from './state/store';


const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='*' element={<UnauthorizedPage/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
 
export default App;
