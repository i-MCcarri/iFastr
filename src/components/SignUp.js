import React from 'react';

export default class SignUp extends React.Component {
    render() {
        return (
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
                    <input type='button' class='signUpBtn' value='Sign Up' />
                </div>
            </form>
        );
    }
}