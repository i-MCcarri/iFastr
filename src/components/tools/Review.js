import React from 'react';
import Nav from '../Nav';
import config from '../../config';

export default class Review extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          fasting_review: [{
              fasting_id: '',
              fasting_start: '',
              fasting_length: '',
              feast_start: '',
              completed: ''
            }]
        };
    }
    
    componentDidMount() {
        const url = `${config.API_ENDPOINT}/fasting_tracker`;
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Simple GET request using fetch for all tracking table info
        fetch(url, options)
            .then( response => {
                if(!response.ok) {
                    throw new Error('something went wrong, please try again later.')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                const fasting_review = Object.keys(data)
                        .map(key => data[key].item);

                this.setState({ 
                //fasting_tracker table
                    fasting_review: data,
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
        const fasting_review = this.state.fasting_review.map(review => <div className='reviewIFTracker' key={review.fasting_id}>
            <ul className='daily-review'> <h4>{this.handleDayOfWeek(review.feast_start)}, {this.handleDate(review.feast_start)}</h4>
                <li>Begining: { review.fasting_start }</li>
                <li>Conclude: { this.handleTime(review.feast_start) }</li>
                <li>Period: { review.fasting_length }hr</li>
            </ul></div>
            )
        return (
            <div id='review'>
                <Nav />
                <div id='reviewForm'>
                    <h3>Review</h3>
                    <p id='subText'>of tracker</p>
                    {fasting_review}
                        {/* <ul>
                            <li><label htmlFor='date'>Date:</label>
                                <input type='date' id='date'/>
                            </li>
                            <ul id='dayVsWk'>
                                <li><label htmlFor='daily' /><input type='radio' name='review' id='daily' />Daily Detail</li>
                                <li><label htmlFor='daily' /><input type='radio' name='review' id='daily' />Week Detail</li>
                            </ul>
                        </ul> */}
                </div>
            </div>
        );
    }
}