import React from 'react';
import SignUpBtn from './SignUpBtn';
import '../App.css'

export default class SignUpInputs extends React.Component {
    render() {
        return (<div id='signUpInputsWrapper'>
                <form id='signUpForm'>
                <fieldset><label for='username'>Username</label> 
                    <div>
                        <input type='textarea' class='username' id='username' required/>
                    </div>
                </fieldset>
                <fieldset><label for='email'>E-mail </label>
                    <div>
                        <input type='email' class='email' id='email' required/>
                    </div>
                </fieldset>
                <fieldset><label for='password'>Password </label>
                    <div>
                        <input type='password' class='password' id='password' required/>
                    </div>
                </fieldset>
                <fieldset><label for='confirm-password'>Confirm Password </label>
                    <div>
                        <input type='password' class='confirm-password ' id='confirm-password' required/>
                    </div>
                </fieldset>
                <div><br/>
                    <SignUpBtn />
                </div>
            </form>
            </div>
        );
    }
}