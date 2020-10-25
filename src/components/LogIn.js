import React from 'react';

export default class LogIn extends React.Component {
    render() {
        return (
                <form id='logInForm' action='/home'>
                    <fieldset>
                        <label for='username'>Username: </label>
                        <div>
                            <input type='textarea' class='username' id='username' required/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label for='password'>Password: </label>
                        <div>
                            <input type='password' class='password ' id='password' required/>
                        </div>
                    </fieldset>
                    <div><br/>
                        <input type='submit' class='signUpBtn' value='Sign In'/>
                    </div>
                </form>
        );
    }
}