import React from 'react';
import SignInBtn from './SignInBtn';
import '../App.css';

export default class LogInInputs extends React.Component {
    render() {
        return (<div id='logInInputsWrapper'>
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
                        <SignInBtn />
                    </div>
                </form>
            </div>
        );
    }
}