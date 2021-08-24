import React from "react";
import "./App.css";
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Content/>
    </div>
  );
};

export default App;
