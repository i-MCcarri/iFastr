import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css'

class SignUpBtn extends React.Component {
    render() {
        return (
            <div id='SignUpBtnWrapper'>  
                <input type='button' id='signUpBtn' value='Sign Up' />
            </div>
        );
    }
}
export default withRouter(SignUpBtn);