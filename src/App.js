import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Content />
    </div>
  );
};


export default App;
