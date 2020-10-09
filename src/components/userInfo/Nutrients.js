import React from 'react';
import Nav from '../Nav';

export default class Nutrients extends React.Component {
    render() {
        return (
            <div id='nutrients'>
                <Nav />
                <div>
                    <form id='reviewForm'>
                        <ul>
                            <li><label htmlFor='date'>Date:</label>
                                <input type='date' id='date'/>
                            </li>
                            <ul id='dayVsWk'>
                                <li><label htmlFor='ttlCarbs'>Total Carbs:</label>
                                    <span id='ttlCarbs'>total from tables</span>
                                </li>
                                <li><label htmlFor='ttlFats'>Total Fats:</label>
                                    <span id='ttlFats'>total from tables</span>
                                </li>
                                <li><label htmlFor='ttlProteins'>Total Proteins:</label>
                                    <span id='ttlProteins'>total from tables</span>
                                </li>
                                <li><label htmlFor=''>Vitamin:</label>
                                    <span id=''>(boolean)switch from Sustenance component</span>
                                </li>
                            </ul>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}