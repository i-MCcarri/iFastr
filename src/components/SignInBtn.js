import React from 'react';
import { withRouter } from 'react-router-dom';

class SignInBtn extends React.Component {
    render() {
        return (
            <div id='signInBtnWrapper'>  
                <input type='submit' id='signUpBtn' value='Sign In'/>
            </div>
        );
    }
}
export default withRouter(SignInBtn);