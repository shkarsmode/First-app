import React from "react";
import "./App.css";
import Content from './components/Content/Content';
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="wrap">
      <HeaderContainer />
      <Content />
    </div>
  );
};

export default App;
