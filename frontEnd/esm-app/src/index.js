import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Routes from './routes/Routes';
import { UserProvider } from './contexts/UserContext' ;
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

