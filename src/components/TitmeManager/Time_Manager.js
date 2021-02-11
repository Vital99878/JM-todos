import React, { useState, useEffect } from 'react';
import './Time_Manager.css';
import PropTypes from 'prop-types';

const Time_Manager = ({ min, sec }) => {
  const [total_seconds, setTotalSeconds] = useState(0);
  const [interval, setMyInterval] = useState(0);

  useEffect(() => {
    setTotalSeconds(min * 60 + sec);
    return () => {
      setMyInterval(0);
    };
  }, []);

  if (total_seconds === 0) {
    clearInterval(interval);
  }

  const run_time = () => {
    // eslint-disable-next-line no-shadow
    setTotalSeconds((total_seconds) => total_seconds - 1);
  };

  const minutes = total_seconds / 60 < 10 ? `0${Math.floor(total_seconds / 60)}` : Math.floor(total_seconds / 60);
  const seconds = total_seconds % 60 < 10 ? `0${total_seconds % 60}` : total_seconds % 60;
  const time = `${minutes}:${seconds}`;

  return (
    <div className="timer">
      <button
        onClick={() => {
          if (!interval) {
            const int = setInterval(run_time, 1000);
            setMyInterval(int);
          }
        }}
        type="button"
        className="icon-play"
        aria-label="Play"
      />
      <button
        onClick={() => {
          clearInterval(interval);
          setMyInterval(0);
        }}
        type="button"
        className="icon-pause"
        aria-label="Pause"
      />
      <p className="timer__time">{time}</p>
    </div>
  );
};

Time_Manager.defaultProp = {
  //  min: 0,
  //  sec: 0
};
Time_Manager.propTypes = {
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
};
export default Time_Manager;
