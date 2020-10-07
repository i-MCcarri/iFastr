import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <label htmlFor='home'></label>
                <button id='home'><i className="fas fa-home">home</i></button>
                <label htmlFor='signUp'></label>
                <button id='signUp'><i className="fas fa-stopwatch">timer</i></button>
                <label htmlFor='signUp'></label>
                <button id='signUp'><i className="fas fa-stream">options</i></button>
            </div>
        );
    }
}