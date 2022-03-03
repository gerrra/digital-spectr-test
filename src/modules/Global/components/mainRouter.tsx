import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Test from '../../Main/components/test/test';

const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<Test />}
            />
        </Routes>
    </BrowserRouter>
);

export default MainRouter;
