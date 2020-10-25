import React from 'react';
import Nav from '../Nav';

export default class Review extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }
    
    componentDidMount() {
        // Simple GET request using fetch for completed = true only
        fetch('http://localhost:8000/ifastr/')
            .then(response => response.json())
            .then(data => this.setState({ 
                //fasting_tracker table
                id: data.fasting_id, 
                fasting_start: data.fasting_start, 
                fasting_length: data.fasting_length, 
                feast_start: data.feast_start, 
                completed: data.completed,
            })
        );
    }

    render() {
        return (
            <div id='review'>
                <Nav />
                <form id='reviewForm'>
                        <ul>
                            <li><label htmlFor='date'>Date:</label>
                                <input type='date' id='date'/>
                            </li>
                            <ul id='dayVsWk'>
                                <li><label htmlFor='daily' /><input type='radio' name='review' id='daily' />Daily Detail</li>
                                <li><label htmlFor='daily' /><input type='radio' name='review' id='daily' />Week Detail</li>
                            </ul>
                        </ul>
                </form>
            </div>
        );
    }
}