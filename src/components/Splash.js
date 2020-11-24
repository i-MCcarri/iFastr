import React from 'react';
import SplashNav from './SplashNav'
import '../App.css';
import './Splash.css';
import Background from '../images/time.jpg'

export default class Splash extends React.Component {
    
    render() {
        return (
        <body className='body'>
            <div id='splash'>
                    <div id='main'>
                        <div id='splashWrapper'>
                            <SplashNav /> 
                        </div>
                    </div>
            </div>
        </body>
        );
    }
}