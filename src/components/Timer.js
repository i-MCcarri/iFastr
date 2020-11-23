import React from 'react';
import Nav from './Nav';
import AnalogClock from "analog-clock-react";
import Timer from "react-compound-timer";
import TimerBtns from './TimerBtns';
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
      baseColor: "#f79fff",
      centerColor: "#FFFFFF",
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

  handleTime(timestamp) {
    let date = new Date(timestamp)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let time
    if (minutes === 0) {
        minutes = '00';
    }
    if (seconds === 0) {
        seconds = '00';
    }
    time = hours + ':' + minutes  + ':' + seconds
    return time;
  }

  calcFast(fasting_start){
    let date = Date.now();
    let currTime = this.handleTime(date);
    let elapsedTime = currTime - fasting_start;
    if (elapsedTime >= 0) {
      let fast = currTime - fasting_start;
    } else {
      return null
    }
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
//get from methods table
//fasting time

  render() {
    let userSelectedMethod = 16;
    return (
        <div id='timerWrapper'>
            <Nav /><br/>
            <div className="timerwrap">
            <br />
            <AnalogClock {...this.state.options} />
            <br />
                <div className="digital" style={{ fontFamily: "Consolas, monospace" }}>
                <Timer
                // initialTime={60 * 1000}
                initialTime={moment
                    .duration(userSelectedMethod, "hours") //this.context.hours here is the timer starting point
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
            <div id='timerBtnsWrapper'>
                <TimerBtns />
            </div>
        </div>
      );
  }
}

export default TimerClass;