import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

export default class Splash extends React.Component {
    state = {
        signup: false,
        login: false,
        count: 0
    }

    setSignUp = () => {
        this.setState({signup: !this.state.signup})
    }

    setLogIn = () => {
        this.setState({login: !this.state.login})
    }

    setCount = () => {
        this.setState({count: this.state.count +1})
    }

    render() {
        return (
        <div>
            <div> {this.state.count}
            <label htmlFor='count'></label>
                    <button id='count' onClick={()=>this.setCount()} >Count</button>
                <form id='splashButtons'>
                    <label htmlFor='signUp'></label>
                    <button id='signUp' onClick={this.setSignUp} >Sign-Up</button>
                    <label htmlFor='logIn'></label>
                    <button id='logIn' onClick={()=>this.setLogIn()} >Log-In</button>
                </form>
            </div>
            {(this.state.signup) && <div className='hidden' id='newUser'><SignUp /></div>} 
            {(this.state.login) && <div className='hidden' id='returningUser'><LogIn /></div>}
        </div>
        );
    }
}