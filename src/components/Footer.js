import React from 'react';
import { FaHome, FaStopwatch, FaTools } from 'react-icons/fa';

export default class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <label htmlFor='home'></label>
                <button id='home'><a href='../home'><FaHome style={{fontSize:'55px', marginTop:'0px'}}/></a></button>
                <label htmlFor='timer'></label>
                <button id='timer'><a href='../timer'><FaStopwatch style={{fontSize:'65px', marginTop:'-15px'}}/></a></button>
                <label htmlFor='tools'></label>
                <button id='tools'><a href='../tools'><FaTools style={{fontSize:'45px', paddingBottom: '5px'}}/></a></button>
            </div>
        );
    }
}