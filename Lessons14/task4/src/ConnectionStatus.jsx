import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const setOnlineStatus = () => {
      setStatus('online');
    };
    const setOfflineStatus = () => {
      setStatus('offline');
    }
    window.addEventListener('online', setOnlineStatus);
    window.addEventListener('offline', setOfflineStatus);

    return () => {
      window.removeEventListener('online', setOnlineStatus);
      window.removeEventListener('offline', setOfflineStatus);
    };
  }, []);

  if (status === 'online') {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
