import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

//Comming Soon:
class TimerBtns extends React.Component {

    // post to fasting_tracker

    
    render() {
        return (
            <div id='timerBtns'> 
                <button id='stop'>Stop</button>
            </div>
        );
    }
}
export default withRouter(TimerBtns);