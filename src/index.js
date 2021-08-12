import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {addPost, addMessage, updatePostText, subscribe} from './redux/state';

let rerenderEntireTree = (state)=> {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
      addPost={addPost} 
      addMessage={addMessage} 
      updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();