import React from 'react';
import './Time_Manager.css';
import PropTypes from 'prop-types';

class Time_Manager extends React.Component {
  state = {
    total_seconds: 0,
    interval: false,
  };

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const run_time = () => {
      const { total_seconds } = this.state;
      this.setState(() => ({
        total_seconds: total_seconds + 1,
      }));
    };

    let { total_seconds } = this.state;
    const minutes = total_seconds / 60 < 10 ? `0${Math.floor(total_seconds / 60)}` : Math.floor(total_seconds / 60);

    const seconds = total_seconds % 60 < 10 ? (total_seconds = `0${total_seconds % 60}`) : total_seconds % 60;

    const time = `${minutes}:${seconds}`;

    return (
      <div className="timer">
        <button
          onClick={() => {
            const { interval } = this.state;
            if (!interval) {
              const int = setInterval(run_time, 1000);
              this.setState({ interval: int });
            }
          }}
          type="button"
          className="icon-play"
          aria-label="Play"
        />
        <button
          onClick={() => {
            const { interval } = this.state;
            clearInterval(interval);
            this.setState({ interval: false });
          }}
          type="button"
          className="icon-pause"
          aria-label="Pause"
        />
        <p className="timer__time">{time}</p>
      </div>
    );
  }
}

Time_Manager.defaultProp = {};
Time_Manager.propTypes = {};
export default Time_Manager;
