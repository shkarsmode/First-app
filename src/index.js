import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, addMessage, updatePostText, subscribe} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state)=> {
  ReactDOM.render(
		<BrowserRouter>
    <React.StrictMode>
      <App state={state} 
      addPost={addPost} 
      addMessage={addMessage} 
      updatePostText={updatePostText}/>
    </React.StrictMode>
		</BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);