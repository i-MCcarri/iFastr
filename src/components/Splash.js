import React from 'react';
import SplashNav from './SplashNav'
import '../App.css';
import './Splash.css';

export default class Splash extends React.Component {
    
    render() {
        return (
        <div className='body'>
            <div id='splash'>
                <p>intelligent fasting assistant.<br /> set, track, review.</p>
                    <div id='main'>
                        <div id='splashWrapper'>
                            <SplashNav />
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}