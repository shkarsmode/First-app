import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (store)=> {
  ReactDOM.render(
		<BrowserRouter>
    <React.StrictMode>
      <App state={store.getState()} 
      addPost={store.addPost.bind(store)} 
      addMessage={store.addMessage.bind(store)} 
      updatePostText={store.updatePostText.bind(store)}/>
    </React.StrictMode>
		</BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store);
store.subscribe(store.rerenderEntireTree);