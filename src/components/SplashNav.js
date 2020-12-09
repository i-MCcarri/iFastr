import React from 'react';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import { withRouter } from 'react-router-dom';

class SplashNav extends React.Component {
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
            <div id='splashNav'>
                {(this.state.signup) && <div className='hidden' id='newUser'><SignUpForm /></div>} 
            {(this.state.login) && <div className='hidden' id='returningUser'><LogInForm /></div>}
                <div id='splashNavBtnWrapper'>  
                    <label htmlFor='signUp'></label>
                    <button id='signUp' onClick={this.setSignUp} >Sign-Up</button>
                    <label htmlFor='logIn'></label>
                    <button id='logIn' onClick={()=>this.setLogIn()} >Log-In</button><br /><br />
                    <a href='https://i-fastr.vercel.app/home#setup'>setup instructions</a> 
                </div>
            </div>
        );
    }
}
export default withRouter(SplashNav);