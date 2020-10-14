import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <label htmlFor='home'></label>
                <button id='home'><a href='../home'><i className="fas fa-home">home</i></a></button>
                <label htmlFor='timer'></label>
                <button id='timer'><a href='../timer'><i className="fas fa-stopwatch">timer</i></a></button>
                <label htmlFor='tools'></label>
                <button id='tools'><a href='../tools'><i className="fas fa-stream">tools</i></a></button>
            </div>
        );
    }
}