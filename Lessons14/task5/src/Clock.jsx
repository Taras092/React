import React, { useEffect, useState } from 'react';
import './index.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formatDate = date => moment(date).format('h:mm:ss A');

const Clock = ({ offset, location, interval }) => {
  const [date, setDate] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(getTimeWithOffset(offset));
    }, interval);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formatDate(date)}</div>
    </div>
  );
};

export default Clock;
