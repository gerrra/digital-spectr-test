import React, { useEffect } from 'react';
import { LaunchesActions } from '../../actions/launchesActions';
import './mainPage.scss';

const MainPage = () => {
    useEffect(
        () => {
            LaunchesActions.latest()
                .then((res) => window.console.log({ res }));
        },
        [],
    );

    return (
        <div
            className={'main-page'}
        >
            <h1>Welcome to React App</h1>
            <h2>Welcome to React App</h2>
            <h3>
                Date : { new Date().toDateString() }
            </h3>
        </div>
    );
}

export default MainPage;
