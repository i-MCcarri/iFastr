import React from 'react';
import SplashNav from './SplashNav'
import '../App.css';
import './Splash.css';
import './time.jpg';

export default class Splash extends React.Component {
    render() {
        return (
        <div id='splash'>
                <div id='main'>
                    <div id='splashWrapper'>
                        <SplashNav /> 
                    </div>
                </div>
        </div>
        );
    }
}