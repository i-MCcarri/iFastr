import React from 'react';
import Nav from '../Nav';
import '../../App.css';

export default class Profile extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }
    
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                user_id: '',
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                cell: '',
                verified_status: '',
                join_date: '',
                method: '',
                fasting_start: ''
            }]
        };    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { firstName, lastName, userName, email, cell, fastMethod, start } = this.state;
        const user = { firstName, lastName, userName, email, cell, fastMethod, start };
        const usersURL = 'http://localhost:8000/users/1';
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Simple GET request using fetch
        fetch(usersURL, options)
            .then(response => {
                if(!response.ok) {
                    throw new Error('something went wrong, please try again later.')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => { 
                console.log(data)
                this.setState({
                    //users table 
                    users: data,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    handleSubmit(event) {
        alert('Profile information has been updated');
        event.preventDefault();
            this.setState({
                firstname: event.target.firstName.value,
                lastname: event.target.lastName.value,
                username: event.target.username.value,
                email: event.target.email.value,
                cell: event.target.cell.value,
                method: event.target.fastMethod.value,
                fasting_start: event.target.start.value,
            })

            console.log('saving fasting start time...')
        
            const url = 'http://localhost:8000/users/fasting_start/1';
            const options = {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({fasting_start: this.state.users.fasting_start})
            };
            fetch(url, options)
                .then( response => {
                    if(!response.ok) {
                        throw new Error('something else went wrong, please try again later.')
                    }
                    response.json()
                })
                .then(json => console.log(json))
    }

    render() {
        return (
            <div id='profile'>
                <Nav />
                <div>
                    <h2>Profile</h2>
                    <form id='userProfile' onSubmit={this.handleSubmit}>
                        <label htmlFor='firstName'>Firstname</label><br />
                        <input type='text' id='firstName' name='firstName' defaultValue={this.state.users.firstname}/><br />
                        <label htmlFor='lastName'>Lastname</label><br />
                        <input type='text' id='lastName' name='lastName' defaultValue={this.state.users.lastname}/><br />
                        <label htmlFor='username'>Username</label><br />
                        <input type='text' id='username' name='username' defaultValue={this.state.users.username}/><br />
                        <label htmlFor='email'>E-mail</label><br />
                        <input type='text' id='email' name='email' defaultValue={this.state.users.email}/><br />
                        <label htmlFor='cell'>Cell Phone</label><br />
                        <input type="tel" id="cell" pattern="\W[0-9]{3}\W[0-9]{3}-[0-9]{4}" maxLength={14} name='cell' defaultValue={this.state.users.cell}/><br />
                        <label htmlFor='fastMethod'>Fasting Method</label><br />
                        <input type='number' id='fastMethod' name='fastMethod' value={this.state.users.method}/><br />
                        <label htmlFor='start'>Fasting Start</label><br />
                        <input type='time' id='start' name='start' defaultValue={this.state.users.fasting_start}/><br />
                        <br />
                        <button type='submit' id='saveUserInfo' onClick={ () => this.render() } >Save</button>
                    </form><br />
                </div>
            </div> 
        );
    };
}