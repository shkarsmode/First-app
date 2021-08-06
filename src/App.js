import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = (props) => {
  return (
    <div className="wrap">
      <Header />
      <Content messegesData={props.messegesData} postsData={props.postsData} dialogsData={props.dialogsData} friendsData={props.friendsData}/>
    </div>
  );
};


export default App;
