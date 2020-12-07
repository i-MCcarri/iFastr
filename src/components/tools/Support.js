import React from 'react';
import Nav from '../Nav';

export default class Support extends React.Component {
    render() {
        return (
            <div id='support'>
                <Nav />
                <div id='heading'>
                    <h2>Developer Support</h2>
                </div>
                <div id='devSupport'>
                    <form id='contactForm'>
                        <ul id='supportTopic'>                        
                            <li><label htmlFor='topicSelector'>Support Topic</label>
                                <select name='topic' id='topicSelector' required>                                    
                                    <option value='na'>----</option>
                                    <option value='about'>About</option>
                                    <option value='faq'>FAQs</option>
                                    <option value='setPassword'>Password Reset</option>
                                    <option value='report'>Submit Ticket</option>
                                    <option value='suggest'>Suggestions</option>                                    
                                    <option value='updates'>Updates</option>
                                </select>
                            </li>
                            <li><label htmlFor='prefName'>Name:</label>
                                <input type='text' id='prefName'/>
                            </li>
                            <li><label htmlFor='subject'>Subject</label>
                                <input type='text' id='subject'/>
                            </li>
                            <ul>
                                <li><label htmlFor='emailSprt' /><input type='radio' name='contact' id='emailSprt' />E-mail</li>
                                <li><label htmlFor='telSprt' /><input type='radio' name='contact' id='telSprt' />Text/Phone</li>
                            </ul>
                            <li><label htmlFor="sprtBody"></label>
                                <textarea id="sprtBody" name="sprtBody" rows="8" cols="32">
                                </textarea>
                            </li>
                        </ul>
                        <div>
                            <button type='submit' id='sprtBtn'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}