import React from 'react';
import Nav from '../Nav';
import config from '../../config';

export default class Accountable extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          fasting_tracker: [{
              fasting_id: '',
              fasting_start: '',
              fasting_length: '',
              feast_start: '',
              completed: ''
            }]
        };
    }
    
    componentDidMount() {
        // Simple GET request using fetch
        const url = `${config.API_ENDPOINT}/fasting_tracker/completed/`;
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Simple GET request using fetch
        fetch(url, options)
            .then( response => {
                if(!response.ok) {
                    throw new Error('something went wrong, please try again later.')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                const fasting_tracker = Object.keys(data)
                        .map(key => data[key].item);
                
                this.setState({ 
                    //fasting_tracker table
                    fasting_tracker: data,
                    error: null
                })
            });
    }

    handleDate(timestamp) {
        let date = new Date(timestamp)
        let year = date.getFullYear()
        let monthAsNumber = date.getMonth()
        let dayAsNumber = date.getDate()
        if (monthAsNumber === 0) return 'January ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 1) return 'February ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 2) return 'March ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 3) return 'April ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 4) return 'May ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 5) return 'June ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 6) return 'July ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 7) return 'August ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 8) return 'September ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 9) return 'October ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 10) return 'November ' + dayAsNumber + ' ' +year; 
        else if (monthAsNumber === 11) return 'December ' + dayAsNumber + ' ' +year; 
    }

    handleDayOfWeek(timestamp){
        let date = new Date(timestamp)
        let dayAsNumber = date.getDay()
        if (dayAsNumber === 0) return 'Sunday';
        else if (dayAsNumber === 1) return 'Monday';
        else if (dayAsNumber === 2) return 'Tuesday';
        else if (dayAsNumber === 3) return 'Wednesday';
        else if (dayAsNumber === 4) return 'Thursday';
        else if (dayAsNumber === 5) return 'Friday';
        else return 'Saturday';
    }

    handleTime(timestamp) {
        let date = new Date(timestamp)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let time
        if (minutes === 0) {
            time = hours + ':00' 
            return time;
        } else {
            time = hours + ':' + minutes 
            return time;
        }

    }
    
    render() {
        const tracking_list = this.state.fasting_tracker.map(tracker => <div className='completedIFTracker' key={tracker.fasting_id}>
            <ul className='daily-tracker'> <h4>{this.handleDayOfWeek(tracker.feast_start)}, {this.handleDate(tracker.feast_start)}</h4>
                <li>Begining: { tracker.fasting_start }</li>
                <li>Conclude: { this.handleTime(tracker.feast_start) }</li>
                <li>Period: { tracker.fasting_length }hr</li>
            </ul></div>
            )
        return (
            <div id='accountable'>
                <Nav />
                <div>
                    <h3>History</h3>
                    <p id='subText'>of Sucess</p>
                    {tracking_list}
                </div>
            </div>
        );
    }
}