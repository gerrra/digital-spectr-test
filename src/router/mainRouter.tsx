import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../modules/Main/pages/mainPage/mainPage';

const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<MainPage />}
            />
        </Routes>
    </BrowserRouter>
);

export default MainRouter;
