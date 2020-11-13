import React from 'react';
import Nav from '../Nav';
import SwitchBtn from './Switch';
import './switch.css';

export default class Exertion extends React.Component {
    render() {
        return (
            <div id='exertion'>
                <Nav />
                <div>
                    <form>
                        <ul id='exertionList'>
                            <li><label htmlFor='exercise'>Exercise:</label><br/>
                                <input 
                                    type='text' 
                                    id='exercise' 
                                />
                            </li>
                            <li><label htmlFor='sets'>Sets:</label><br/>
                                <input 
                                    type='number' 
                                    id='sets' 
                                />
                            </li>
                            <li><label htmlFor='reps'>Repetitions:</label><br/>
                                <input 
                                    type='number' 
                                    id='reps' 
                                />
                            </li>
                            <li><label htmlFor='weightSelector'>Mass Method:</label><br/>
                                <select 
                                    name='topic' 
                                    id='massSelector' required  >                                    
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
                            <fieldset id="method">
                                <legend id="method__name"/>
                            <li id='training-method-desc'>Training Method:
                                    <div id="method__item">
                                        <input 
                                            type="radio" 
                                            id="resist" 
                                            className="method__option" 
                                            name="trnMethod" 
                                            checked=""
                                        />
                                        <label 
                                            htmlFor="resist" 
                                            className="method__label">
                                            Resistance
                                        </label>
                                    </div>
                                    <div id="method__item">
                                        <input 
                                            type="radio" 
                                            id="strength" 
                                            className="method__option" 
                                            name="trnMethod"
                                        />
                                        <label 
                                            htmlFor="strength" 
                                            className="method__label">
                                            Strength
                                        </label>
                                    </div>
                                    <div id="method__item">
                                        <input 
                                            type="radio" 
                                            id="aerobic" 
                                            className="method__option" 
                                            name="trnMethod"
                                        />
                                        <label 
                                            htmlFor="aerobic" 
                                            className="method__label">
                                            Aerobic
                                        </label>
                                    </div>
                                
                            </li></fieldset>
                            <li>Load:<br/><label htmlFor='weight'><SwitchBtn />  </label>
                                <input 
                                    type='number' 
                                    id='weight' 
                                /> 
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}