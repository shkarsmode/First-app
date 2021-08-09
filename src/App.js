import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = (props) => {
  return (
    <div className="wrap">
      <Header />
      <Content 
      stateDialogs={props.state.dialogsPage}
      stateProfile={props.state.profilePage}
      addPost={props.addPost}/>
    </div>
  );
};


export default App;
