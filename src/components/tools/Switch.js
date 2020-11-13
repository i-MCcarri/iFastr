import React, { Component } from 'react';
import Switch from 'react-switch';
 
export default class SwitchBtn extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label>
        <Switch 
            onChange={this.handleChange} 
            checked={this.state.checked} 
            id='switchBtn' 
            offColor='#51A3A3' 
            onColor='#f79fff'
            uncheckedIcon={<div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: 15,
                  color: '#FFFFFF',
                  paddingRight: 2
                }}
              >
                kg
              </div>}
            checkedIcon={<div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "#000000",
                  paddingRight: 2
                }}
              >
                lbs
              </div>} 
        />
      </label>
    );
  }
}