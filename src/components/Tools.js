import React from 'react';
import Nav from './Nav';

export default class Tools extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    render() {
        return (
            <div id='options'>
                <Nav />
                <div>
                    <ul id='userViews'>
                        <div>
                            <h3>User Info</h3>
                        </div><p>tools for success:</p>
                        <li><label htmlFor='profile'></label>
                <button id='profile'><a href='./tools/profile'>Profile</a></button></li>
                        <li><label htmlFor='accountable'></label>
                <button id='accountable'><a href='./tools/accountable'>Accountable</a></button></li>
                        <li><label htmlFor='exertion'></label>
                <button id='exertion'><a href='./tools/exertion'>Exertion</a></button></li>
                        <li><label htmlFor='methods'></label>
                <button id='methods'><a href='./tools/methods'>Method</a></button></li>
                        <li><label htmlFor='nutrients'></label>
                <button id='nutrients'><a href='./tools/Nntrients'>Nutrients</a></button></li>
                        <li><label htmlFor='sustenance'></label>
                <button id='sustenance'><a href='./tools/sustenance'>Sustenance</a></button></li>
                        <li><label htmlFor='review'></label>
                <button id='review'><a href='./tools/review'>Review</a></button></li>
                        <li><label htmlFor='support'></label>
                <button id='support'><a href='./tools/support'>Supoprt</a></button></li>
                    </ul>
                </div>
            </div>
        );
    }
}