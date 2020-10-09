import React from 'react';
import Nav from '../Nav';
import './switch.css';

export default class Profile extends React.Component {
    render() {
        return (
            <div id='profile'>
                <Nav />
                <div>
                    user image
                    <form id='userProfile'>
                        <label htmlFor='fName'>Name:</label>
                        <input type='text' id='fName'/>
                        <label htmlFor='lName'></label>
                        <input type='text' id='lName'/>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' id='username'/>
                        <label htmlFor='e-mail'>E-mail:</label>
                        <input type='text' id='e-mail'/>
                        <label htmlFor='tel'>Cell Phone:</label>
                        <input type="tel" id="tel" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}" />
                        <label htmlFor='switch' class="switch">Enable Push Notification
                        <input type="checkbox" />
                        <span id='switch' class="slider round"></span>
                        </label>
                        <button id='editUserInfo'>Edit</button>
                        <button id='saveUserInfo'>Save</button>
                    </form>
                </div>
            </div> 
        );
    }
}