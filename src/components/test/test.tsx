import React from 'react';
import './test.scss';

const Test = () => {
    return (
        <div>
            <h1>Welcome to React App3</h1>
            <h2>Welcome to React App</h2>
            <h3>
                Date : { new Date().toDateString() }
            </h3>
        </div>
    );
}

export default Test;
