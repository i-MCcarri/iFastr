import React from 'react';
import Nav from '../Nav';

export default class Review extends React.Component {
    render() {
        return (
            <div id='review'>
                <Nav />
                <form id='reviewForm'>
                        <ul>
                            <li><label htmlFor='date'>Date:</label>
                                <input type='date' id='date'/>
                            </li>
                            <ul id='dayVsWk'>
                                <li><label htmlFor='daily' /><input type='radio' name='review' id='daily' />Daily Detail</li>
                                <li><label htmlFor='daily' /><input type='radio' name='review' id='daily' />Week Detail</li>
                            </ul>
                        </ul>
                </form>
            </div>
        );
    }
}