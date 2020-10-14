import React from 'react';
import Nav from '../Nav';

export default class Methods extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

    render() {
        return (
            <div id='methods'>
                <Nav />
                <div>
                    <h3>It's Your Choice</h3>
                </div>
                <div>
                    <p>Select your ratio</p>
                    <form>
                        <ul>
                            <li><label htmlFor='20:4' /><input type='radio' name='method' id='20:4' />20:4</li>
                            <li><label htmlFor='19:5' /><input type='radio' name='method' id='19:5' />19:5</li>
                            <li><label htmlFor='18:6' /><input type='radio' name='method' id='18:6' />18:6</li>
                            <li><label htmlFor='17:7' /><input type='radio' name='method' id='17:7' />17:7</li>
                            <li><label htmlFor='16:8' /><input type='radio' name='method' id='16:8' />16:8</li>
                            <li><label htmlFor='15:9' /><input type='radio' name='method' id='15:9' />15:9</li>
                            <li><label htmlFor='14:10' /><input type='radio' name='method' id='14:10' />14:10</li>
                        </ul>
                    </form>
                    <button id='save'>Save</button>
                </div>
            </div>
        );
    }
}