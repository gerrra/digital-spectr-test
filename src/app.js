import React from 'react';
import { ToastContainer } from 'react-toastify';
import './app.css';
import MainRouter from './router/mainRouter';
import { StyleImports } from './styles/styleImports';

function App() {
    return (
        <div>
            <StyleImports />
            <MainRouter />
            <ToastContainer />
        </div>
    );
}

export default App;
