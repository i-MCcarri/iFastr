import React from 'react';
import Nav from '../Nav';

export default class Sustenance extends React.Component {
    render() {
        return (
            <div id='sustenance'>
                <Nav />
                <div>
                    <form id='mealTracker'>
                        <ul>
                            <li><label htmlFor='date'>Date:</label>
                            <input type='date' id='date'/></li>
                            <li><label htmlFor='title'>Title:</label>
                            <input type='text' id='title'/></li>
                            <li><label htmlFor='mealType'>Meal type:</label>
                            <select name="mealType" id="mealType">
                                <option value="iftar">Breakfast</option>
                                <option value="snack">Snack</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="smoothie">Smoothie</option>
                            </select></li>
                            <ul id='macroMicro'>Macro & Micro Nutrients
                                <li><label htmlFor='carbs'>Carbohydrates:</label>
                                <input type='text' id='carbs'/></li>
                                <li><label htmlFor='fat'>Fat:</label>
                                <input type='text' id='fat'/></li>
                                <li><label htmlFor='protein'>Protein:</label>
                                <input type='text' id='protein'/></li>
                                <li><label htmlFor='switch' class="switch">
                                <input type="checkbox" />
                                <span id='switch' class="slider round">Daily Vitamin</span>
                                </label></li>                                
                            </ul>
                            <ul id='liquids'> Water Intake
                                <li><label htmlFor='ozLiquids'>H2O:</label>
                                <input type='number' id='ozLiquids'/></li>
                            </ul>
                            <li><button id='favMeal'>+ Favorites</button></li>                            
                            <li><button id='editUserInfo'>Edit</button></li>
                            <li><button id='saveUserInfo'>Save</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}