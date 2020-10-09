import React from 'react';
import Nav from '../Nav';
import './switch.css';

export default class Exertion extends React.Component {
    render() {
        return (
            <div id='exertion'>
                <Nav />
                <div>
                    <form>
                        <ul>
                            <li><label htmlFor='exercise'>Exercise:</label>
                                <input type='text' id='exercise' />
                            </li>
                            <li><label htmlFor='sets'>Sets:</label>
                                <input type='number' id='sets' />
                            </li>
                            <li><label htmlFor='reps'>Reps:</label>
                                <input type='number' id='reps' />
                            </li>
                            <li><label htmlFor='weightSelector'>Weight Method:</label>
                                <select name='topic' id='weightSelector' required>                                    
                                    <option value='na'>----</option>
                                    <option value='barbell'>Barbell</option>
                                    <option value='dumbell'>Dumbell</option>
                                    <option value='kettlebell'>Kettlebell</option>
                                    <option value='cable'>Cable</option>                                    
                                    <option value='calisthenic'>Calisthenic</option>
                                    <option value='medicine-ball'>Medicine Ball</option>
                                    <option value='battle-ropes'>Battle Ropes</option>
                                </select>
                            </li>
                            <ul id='trainingMethod'>Training Method:
                                <li><label htmlFor='resist' ></label>
                                    <input type='radio' name='trnMethod' id='resist' />Resistance
                                </li>
                                <li><label htmlFor='strength' ></label>
                                    <input type='radio' name='trnMethod' id='strength' />Strength
                                </li>
                                <li><label htmlFor='aerobic' ></label>
                                    <input type='radio' name='trnMethod' id='aerobic' />Aerobic
                                </li>
                            </ul>
                            <li><label htmlFor='weight'>Weight:</label>
                                <input type='number' id='weight' />
                            </li>
                            <li><label htmlFor='switch' class="switch">lbs/kg:
                                <input type="checkbox" />
                                <span id='switch' class="slider round"></span>
                                </label>   
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}