import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchCard from '../modules/Main/pages/launchCard/launchCard';
import MainPage from '../modules/Main/pages/mainPage/mainPage';

const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<MainPage />}
            />
            <Route
                path='/card/:flight_number'
                element={<LaunchCard />}
            />
        </Routes>
    </BrowserRouter>
);

export default MainRouter;
