import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App messegesData={messegesData} postsData={postsData} dialogsData={dialogsData} friendsData={friendsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

