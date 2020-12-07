import React from 'react';
import SignInBtn from './SignInBtn';
import '../App.css';

export default class LogInForm extends React.Component {
    render() {
        return (<div id='logInFormWrapper'>
                <form id='logInForm' action='/home'>
                    <fieldset>
                        <label htmlFor='username'>Username: </label>
                        <div>
                            <input type='textarea' className='username' id='username' required/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'>Password: </label>
                        <div>
                            <input type='password' className='password ' id='password' required/>
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