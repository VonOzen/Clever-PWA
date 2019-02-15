import React from 'react';

export const Main = (props) => {
    return (
        <main className="">
            <h1>{props.bgColorClass}</h1>
            <button onClick={props.changeBgColor}>Toggle Background</button>
        </main>
    );
};
