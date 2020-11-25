import React from 'react';
import Nav from '../Nav';
import config from '../../config';
import './Method.css';

export default class Methods extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            currentlySelectedID: '',
          fasting_methods: [{
              method_id: '',
              method: '',
              fasting: '',
              feasting: ''
            }]
        };
    }

    componentDidMount() {
        //const { method_id, method_options, fasting_length, feasting_length } = this.state;
        //const method = { method_id, method_options, fasting_length, feasting_length };
        const url = `${config.API_ENDPOINT}/fasting_methods`;
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
                const fasting_methods = Object.keys(data)
                        .map(key => data[key].item);
                
                this.setState({
                    //fasting_methods
                    fasting_methods: data,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }
    
    test = (e) => {
        this.setState({currentlySelectedID: e.target.id})
        console.log(e.target.id);
    }

    saveMethod = (e) => {
        e.preventDefault();
        console.log('patching method id...')
        
        const url = `${config.API_ENDPOINT}/users/method/1`;
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({method: this.state.currentlySelectedID})
        };
        fetch(url, options)
            .then( response => {
                if(!response.ok) {
                    throw new Error('something else went wrong, please try again later.')
                }
            })
            
    }

    render() {

        //console.log(this.state.currentlySelectedID)
        const fasting_list = this.state.fasting_methods.map(method => 
            <li key={method}>
                <div className='itemBorder'>
                    <div className="methods__item">
                        <label 
                            htmlFor={method.method_id} 
                            className="methods__label">
                                {method.method_options}
                        </label>
                        <input 
                            type='radio' 
                            onChange={this.test} 
                            name='method'
                            className="methods__option" 
                            id={method.method_id} 
                            value={method.method_options} 
                        />        
                    </div>
                </div>
            </li>)
        console.log(this.state.fasting_methods);
        const error = this.state.error
          ? <div className="error">{this.state.error}</div>
          : "";

        return (
            <div id='methods'>
                <Nav />
                <div>
                    <h3>It's Your Choice</h3>
                </div>
                <div id='selectMethod'>
                    <p className='pdesc'>Select your ratio</p>
                        {error}
                    <form id='methodForm' onSubmit={e => this.componentDidMount(e)}>
                        <ul className='methodsList'>
                            <fieldset className="methods">
                                <legend className="methods__name"/>
                                {fasting_list}
                            </fieldset>
                        </ul>
                    </form>
                    <button type='submit' id='saveUserInfo' onClick={ (e) => this.saveMethod(e) } >Save</button>
                </div>
            </div>
        );
    }
}