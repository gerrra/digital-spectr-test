import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchCard from '../modules/Main/pages/launchCard/launchCard';
import launchStore from '../modules/Main/stores/launchStore';
import { MainPage } from '../modules/Main/pages/mainPage/mainPage';

const stores = { launchStore };

const MainRouter = () => (
    <Provider
        {...stores}
    >
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
    </Provider>
);

export default MainRouter;
