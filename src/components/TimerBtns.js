import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class TimerBtns extends React.Component {
    render() {
        return (
            <div id='timerBtns'>  
                <button id='start'>Start</button>
                <button id='stop'>Stop</button>
                <button id='reset'>Reset</button>
            </div>
        );
    }
}
export default withRouter(TimerBtns);