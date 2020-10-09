import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

export default class Splash extends React.Component {
    state = {
        signup: false,
        login: false
    }

    setSignUp = () => {
        this.setState({
            signup: !this.state.signup,
            login: false
        });
    }

    setLogIn = () => {
        this.setState({
            login: !this.state.login,
            signup: false
        });
        
    }

    render() {
        return (
        <div>
            <div>
                <label htmlFor='signUp'></label>
                <button id='signUp' onClick={this.setSignUp} >Sign-Up</button>
                <label htmlFor='logIn'></label>
                <button id='logIn' onClick={()=>this.setLogIn()} >Log-In</button>
            </div>
            {(this.state.signup) && <div className='hidden' id='newUser'><SignUp /></div>} 
            {(this.state.login) && <div className='hidden' id='returningUser'><LogIn /></div>}
        </div>
        );
    }
}