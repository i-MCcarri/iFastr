import React from "react";

export const TimerContext = React.createContext({
  hours: null,
  handleChoice: () => {},
  fasting_start: ''
});

export class TimerProvider extends React.Component {
  state = {
    hours: null
  };

  handleChoice = (arg) => {
    this.setState({
      //split
      hours: arg
    });
  };

  //set up method for post and fetch request for user form data

  render() {
    return (
      <TimerContext.Provider
        value={{
          hours: this.state.hours,
          handleChoice: this.handleChoice
        }}
      >
        {this.props.children}
      </TimerContext.Provider>
    );
  }
}
