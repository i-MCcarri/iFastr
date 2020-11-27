import React from 'react';
import Nav from './Nav';
import AnalogClock from "analog-clock-react";
import Timer from "react-compound-timer";
import TimerBtns from './TimerBtns';
import { TimerContext } from "./Context";
import moment, { now } from "moment";
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
      digital_hours: '',
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
                }, function(){
                  let hours = this.calcFast(this.state.join.fasting_start, this.state.join.fasting_length);
                  this.setState({digital_hours: hours})
                })
                
            });
  }

  //prevent timer reset on page reload
  calcFast(IFStart, IFLength) {
    let startTimeArr = IFStart.split(':');
    let duration = moment.duration(IFLength, 'hours');
    let todays_fast_start = moment().hours(startTimeArr[0]).minutes(startTimeArr[1]).seconds(startTimeArr[2])
    let yesterdays_fast_start = todays_fast_start.clone().subtract(1, 'days')
    let now = moment();
    let milliseconds;
    let temp;
    let remaining_time;
  

    // if the fast has gone into the next day:
    // compare current time to the feast start (end of fast)
    if (now < yesterdays_fast_start + duration) {
      // >>> we are still fasting
      // calculate remaining time for user's fast
      milliseconds = (yesterdays_fast_start + duration) - now;
      temp = moment.duration(milliseconds);
      remaining_time = temp.asHours();
      console.log(remaining_time);
      return remaining_time;
    }
    // if the fast is within the same day 2 things must be true:
    // 1. current time must be after fasting start time && 
    // 2. current time must be before the feast start time (fast end)
    else if ((now > todays_fast_start) && (now < todays_fast_start + duration)) {
      // >>> we have started fasting
      // calculate remaining time for user's fast
      milliseconds = (todays_fast_start + duration) - now;
      temp = moment.duration(milliseconds)
      remaining_time = temp.asHours();
      console.log(remaining_time);
      return remaining_time;
    } else {
      // if we reached this line we're not fasting
      console.log('Feast!!!')
      return 0;
      
    }
  }
  
  render() {
    let hrs=this.state.digital_hours;
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