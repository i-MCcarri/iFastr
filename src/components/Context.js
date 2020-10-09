import React from "react";

export const TimerContext = React.createContext({
  hours: null
});

export class TimerProvider extends React.Component {
  state = {
    hours: null
  };

  handleChoice = (arg) => {
    this.setState({
      hours: arg
    });
  };

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
