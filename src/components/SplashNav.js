import React from 'react';
import SignUpInputs from './SignUpInputs';
import LogInInputs from './LogInInputs';
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
                {(this.state.signup) && <div className='hidden' id='newUser'><SignUpInputs /></div>} 
            {(this.state.login) && <div className='hidden' id='returningUser'><LogInInputs /></div>}
                <div id='splashNavBtnWrapper'>  
                    <label htmlFor='signUp'></label>
                    <button id='signUp' onClick={this.setSignUp} >Sign-Up</button>
                    <label htmlFor='logIn'></label>
                    <button id='logIn' onClick={()=>this.setLogIn()} >Log-In</button>
                </div>
            </div>
        );
    }
}
export default withRouter(SplashNav);