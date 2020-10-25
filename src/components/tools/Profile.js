import React from 'react';
import Nav from '../Nav';
import './switch.css';
import '../../App.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            cell: '',
            method: '',
            start: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://localhost:8000/ifastr/')
            .then(response => response.json())
            .then(data => this.setState({
                //users table 
                id: data.user_id,
                first_name: data.firstname,
                last_name: data.lastname,
                username: data.username,
                email: data.email,
                cell: data.cell,
                pass: data.pass,
                verified_status: data.verified_status,
                join_date: data.join_date,
                //fasting_methods table
                method: data.method,
                ////fasting_tracker table
                fasting_start: data.fasting_start,
            })
        );
    }

    handleSubmit(event) {
        alert('Profile information has been updated');
        event.preventDefault();
            this.setState(
                {firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                userName: event.target.userName.value,
                email: event.target.email.value,
                cell: event.target.cell.value,
                method: event.target.method.value,
                start: event.target.method.value,
                }
            )

        //post to ifastr datatbase, user table 
    }

    render() {
        return (
            <div id='profile'>
                <Nav />
                <div>
                    <h2>Profile</h2>
                    <form id='userProfile' onSubmit={this.handleSubmit}>
                        <label htmlFor='firstName'>Firstname</label><br/>
                        <input type='text' id='firstName' name='firstName'/><br/>
                        <label htmlFor='lastName'>Lastname</label><br/>
                        <input type='text' id='lastName' name='lastName'/><br/>
                        <label htmlFor='userName'>Username</label><br/>
                        <input type='text' id='userName' name='userName'/><br/>
                        <label htmlFor='email'>E-mail</label><br/>
                        <input type='text' id='email' name='email'/><br/>
                        <label htmlFor='cell'>Cell Phone</label><br/>
                        <input type="tel" id="cell" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}" name='cell'/><br/>
                        <label htmlFor='method'>Fasting Method</label><br/>
                        <input type='number' id='method' name='method'/><br/>
                        <label htmlFor='start'>Fasting Start</label><br/>
                        <input type='time' id='start' name='start'/><br/>
                        <br/>
                        <button type='submit' id='saveUserInfo' onClick={ () => this.render() }>Save</button>
                    </form><br/>
                </div>
            </div> 
        );
    }
}