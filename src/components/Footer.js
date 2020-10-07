import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <label htmlFor='home'></label>
                <button id='home'><a href='./home'><i className="fas fa-home">home</i></a></button>
                <label htmlFor='timer'></label>
                <button id='timer'><a href='./timer'><i className="fas fa-stopwatch">timer</i></a></button>
                <label htmlFor='options'></label>
                <button id='options'><a href='./options'><i className="fas fa-stream">options</i></a></button>
            </div>
        );
    }
}