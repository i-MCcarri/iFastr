import React from 'react';
import Nav from '../Nav';

export default class Accountable extends React.Component {
    
    componentDidMount() {
        // Simple GET request using fetch
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
            <div id='accountable'>
                <Nav />
                <div>
                    <form>
                        <ul id='accountable'>History of Sucess:
                            <li>successful IF date from table
                            </li>
                            <li>successful IF start time from table
                            </li>
                            <li>successful IF Iftar time from table
                            </li>
                            <li>time of length of the successful fast from table
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}