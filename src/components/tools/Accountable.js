import React from 'react';
import Nav from '../Nav';

export default class Accountable extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          fasting_methods: [{
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
        const url = 'http://wwww.localhost:8000/fasting_tracker/completed/';
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