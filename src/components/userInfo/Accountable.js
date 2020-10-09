import React from 'react';
import Nav from '../Nav';

export default class Accountable extends React.Component {
    render() {
        return (
            <div id='accountable'>
                <Nav />
                <div>
                    <form>
                        <ul id='accountable'>History of Sucess:
                            <li>successful IF date from table
                            </li>
                            <li>successful IF start time from table
                            </li>
                            <li>successful IF Iftar time from table
                            </li>
                            <li>time of length of the successful fast from table
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}