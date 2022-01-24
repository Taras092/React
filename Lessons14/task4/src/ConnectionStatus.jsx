import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setPageStatus] = useState(true);

  useEffect(() => {
    const setOnlineStatus = e => {
      console.log(e);
      console.log(navigator.onLine);
      setPageStatus(navigator.onLine);
    };
    const setOfflineStatus = e => {
      setPageStatus(navigator.onLine);
    }
    window.addEventListener('online', setOnlineStatus);
    window.addEventListener('offline', setOfflineStatus);
        if (navigator.onLine) {
          setOnlineStatus();
        } else {
          setOfflineStatus();
        }

    return () => {
      window.removeEventListener('online', setOnlineStatus);
      window.removeEventListener('offline', setOfflineStatus);
    };
  }, []);

  if (isOnline) {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
