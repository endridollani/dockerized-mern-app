import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import UnauthorizedPage from './ui/unauthorizedPage/UnauthorizedPage';
import { store } from './state/store';
import { ThemeProvider } from '@emotion/react';
import appTheme from './appTheme';
import DashboardPage from './ui/dashboard/DashboardPage';
import CarDetailsPage from './ui/carDetails/CarDetailsPage';


const App: React.FC = () => (
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/cardetails/:carId' element={<CarDetailsPage />} />
            <Route path='*' element={<UnauthorizedPage/>} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </ThemeProvider>
)
 
export default App;
