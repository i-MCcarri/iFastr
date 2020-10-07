import React from 'react';

export default class Options extends React.Component {
    render() {
        return (
            <div id='options'>
                <div>
                    <h3>It's Your Choice</h3>
                </div>
                <div>
                    <p>Select your ratio</p>
                    <ul>
                        <li>Eat-Stop-Eat</li>
                        <li>5:2</li>
                        <li>20:4</li>
                        <li>19:5</li>
                        <li>18:6</li>
                        <li>17:7</li>
                        <li>16:8</li>
                        <li>15:9</li>
                        <li>14:10</li>
                    </ul>
                </div>
            </div>
        );
    }
}