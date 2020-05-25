import React, { useState, useEffect } from 'react';
import './App.css';

import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:5000';

const App = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('chat message', (data) => {
      setResponse(data);
    });
  }, []);

  return <div>{response}l</div>;
};

export default App;
