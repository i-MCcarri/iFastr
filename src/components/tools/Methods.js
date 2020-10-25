import React from 'react';
import Nav from '../Nav';

export default class Methods extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
          fasting_methods: [{
              id: '',
              method: '',
              fasting: '',
              feasting: ''
            }]
        };
    }

    methodChanged(fasting_methods){
        this.setState({
            fasting_methods
        });
    }

    componentDidMount(e) {
        e.preventDefault();
        const {id, method, fasting, feasting} = this.state;
        const method = {id, method, fasting, feasting};
        const url = 'http://localhost:8000/ifastr/';
        const options = {
            method: 'GET',
            body: JSON.stringify(method),
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
                const fasting_methods = Object.keys(data)
                        .map(key => data[key].item[0]);
                
                this.setState({
                    //fasting_methods
                    fasting_methods,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    render() {
        const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";

        return (
            <div id='methods'>
                <Nav />
                <div>
                    <h3>It's Your Choice</h3>
                </div>
                <div>
                    <p>Select your ratio</p>
                    {error}
                    <form id='methodForm' onSubmit={e => this.componentDidMount(e)}>
                        <ul>
                            <li><label htmlFor='20:4' /><input type='radio' name='method' id='20:4' />20:4</li>
                            <li><label htmlFor='19:5' /><input type='radio' name='method' id='19:5' />19:5</li>
                            <li><label htmlFor='18:6' /><input type='radio' name='method' id='18:6' />18:6</li>
                            <li><label htmlFor='17:7' /><input type='radio' name='method' id='17:7' />17:7</li>
                            <li><label htmlFor='16:8' /><input type='radio' name='method' id='16:8' />16:8</li>
                            <li><label htmlFor='15:9' /><input type='radio' name='method' id='15:9' />15:9</li>
                            <li><label htmlFor='14:10' /><input type='radio' name='method' id='14:10' />14:10</li>
                        </ul>
                    </form>
                    <button type='submit' id='save'>Save</button>
                </div>
            </div>
        );
    }
}