import React from 'react';
import SignUpBtn from './SignUpBtn';
import '../App.css'

export default class SignUpForm extends React.Component {
    render() {
        return (<div id='signUpFormWrapper'>
                <form id='signUpForm'>
                <fieldset><label htmlFor='username'>Username</label> 
                    <div>
                        <input type='textarea' className='username' id='username' required/>
                    </div>
                </fieldset>
                <fieldset><label htmlFor='email'>E-mail </label>
                    <div>
                        <input type='email' className='email' id='email' required/>
                    </div>
                </fieldset>
                <fieldset><label htmlFor='password'>Password </label>
                    <div>
                        <input type='password' className='password' id='password' required/>
                    </div>
                </fieldset>
                <fieldset><label htmlFor='confirm-password'>Confirm Password </label>
                    <div>
                        <input type='password' className='confirm-password ' id='confirm-password' required/>
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