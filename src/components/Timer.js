import React from 'react';
import Nav from './Nav';
import AnalogClock from "analog-clock-react";
import Timer from "react-compound-timer";
import TimerBtns from './TimerBtns';
import { TimerContext } from "./Context";
import moment from "moment";
import config from '../config';
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
      join: '',
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
    if (elapsedTime > 0) {
      return true;
    } else {
      return false;
    }
  }

  
  componentDidMount() {
    this.getFastingLength();
    //console.log(this.context.hours);
    //this.getFastingLength();
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
    // do something when timer is up!
    console.log("FEAST!!");
    //let completed = (feast_start - fasting_start >= fasting_length) ? true : false;
    const data = {
      fasting_id: this.state.fasting_id,
      fasting_start: this.state.fasting_start,
      fasting_length:  this.state.fasting_length,
      feast_start: new Date(),
      completed: this.state.completed       
    }
    const url = `${config.API_ENDPOINT}/fasting_tracker`;
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(tracker => {
          this.context.addNote(tracker)
          this.props.history.push('/tools/review')
        })
        .catch(error => {
          console.error({ error })
        })
  };
//get from methods table
//fasting time
  getFastingLength() {
    const url = `${config.API_ENDPOINT}/users/timer/1`;
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        // Simple GET request using fetch for all tracking table info
        fetch(url, options)
            .then( response => {
                if(!response.ok) {
                    throw new Error('something went wrong, please try again later.')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ 
                //fasting_tracker table
                    join: data,
                    error: null
                })
            });
  }
  render() {
    let hrs=parseInt(this.state.join.fasting_length);
    //console.log(hrs);
    if(!hrs) hrs = 0;
    let millis=moment
    .duration(hrs, "hours") //this.context.hours here is the timer starting point
    .asMilliseconds();
    return (
        <div id='timerWrapper'>
            <Nav />
            <h3>Timer</h3>
            <div className="timerwrap">
            <br />
            <AnalogClock {...this.state.options} />
            <br />
                <div className="digital" style={{ fontFamily: "Consolas, monospace" }}>
                {
                  hrs && <> 
                    <Timer
                    // initialTime={60 * 1000}
                    initialTime={millis}
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
                    </>
              }
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