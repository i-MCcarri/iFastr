import React from 'react';
import Nav from '../Nav';
import './switch.css';

export default class Sustenance extends React.Component {
    render() {
        return (
            <div className='sustenance'>
                <Nav />
                <div>
                    <h3>Sustenance</h3>
                    <p id='subText'>tracker</p>
                    <form id='mealTracker'>
                        <ul className='mealDetails'>
                            <li><label htmlFor='date'>Date:</label><br/>
                            <input type='date' id='date'/></li>
                            <li><label htmlFor='title'>Title:</label><br/>
                            <input type='text' id='title'/></li>
                            <li><label htmlFor='mealType'>Meal type:</label><br/>
                            <select name="mealType" id="mealType">
                                <option value="iftar">Breakfast</option>
                                <option value="snack">Snack</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="smoothie">Smoothie</option>
                            </select></li></ul>
                            <h4>Macro & Micro Nutrients</h4>
                            <ul className='mealDetails'><li><label htmlFor='carbs'>Carbohydrates:</label><br/>
                                <input type='text' id='carbs'/></li>
                                <li><label htmlFor='fat'>Fat:</label><br/>
                                <input type='text' id='fat'/></li>
                                <li><label htmlFor='protein'>Protein:</label><br/>
                                <input type='text' id='protein'/></li>
                                <li><label htmlFor='switch' className="switch">
                                <input type="checkbox" />
                                <span id='switch' className="slider round">Daily Vitamin</span>
                                </label></li></ul>                                
                            <h4>Water Intake</h4>
                            <ul className='mealDetails'><li><label htmlFor='ozLiquids'>H2O:</label><br/>
                                <input type='number' id='ozLiquids'/></li></ul>
                            <button id='saveMealInfo'>Save</button>
                        
                    </form>
                </div>
            </div>
        );
    }
}