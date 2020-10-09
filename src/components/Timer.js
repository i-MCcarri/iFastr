import React from 'react';
import Nav from './Nav';
import AnalogClock from "analog-clock-react";
import Timer from "react-compound-timer";
import { TimerContext } from "./Context";
import moment from "moment";
import "./timer.css";

class TimerClass extends React.Component {
    static defaultProps = {
        history: {
          goBack: () => { }
        }
    }

  static contextType = TimerContext;
  constructor(props) {
    super(props);
    this.options = {
      useCustomTime: true, // set this to true
      width: "300px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "#459cff",
      handColors: {
        second: "#d81c7a",
        minute: "#fff",
        hour: "#fff"
      }
    };

    this.state = {
      options: {
        ...this.options,
        seconds: 0,
        minutes: 0,
        hours: 0
      },
      time: 0
    };
  }

  componentDidMount() {
    console.log(this.context.hours);
    this.setState({
      time: this.context.hours * 60 * 60
    });
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
        options: {
          ...this.state.options,
          seconds: this.state.time % 60,
          minutes: (this.state.time / 60) % 60,
          hours: this.state.time / 60 / 60
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log(this.context.hours);
    clearInterval(this.interval);
  }

  onTimerEnds = () => {
    // do something when timed!
    console.log("Timer!!");
  };

  render() {
    return (
        <div>
            <Nav />
            <div id='timerWrapper'>
            <div id='componentWrapper'>
            <Nav />
            <div className="timerwrap">
            <br />
            <AnalogClock {...this.state.options} />
            <br />
            <div
                className="digital"
                style={{ fontFamily: "Consolas, monospace" }}
            >
                <Timer
                // initialTime={60 * 1000}
                initialTime={moment
                    .duration(this.context.hours, "hours") //this.context.hours here is the timer starting point
                    .asMilliseconds()}
                direction="backward"
                timeToUpdate={1000}
                checkpoints={[
                    {
                    time: 1,
                    callback: () => this.onTimerEnds()
                    }
                ]}
                >
                <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />{" "}
                
                </Timer>
            </div>
            </div>
        </div>
            </div>
            <div id='btns'>
                <button id='start'>Start</button>
                <button id='stop'>Stop</button>
                <button id='reset'>Reset</button>

            </div>
        </div>
        
      );
  }
}

export default TimerClass;