import React from "react";
import "./App.css";
import Content from './components/Content/Content';
import HeaderContainer from "./components/Header/HeaderContainer";

const App = props => {
  return (
    <div className="wrap">
      <HeaderContainer />
      <Content id={props.store.getState().auth.id} />
    </div>
  );
};

export default App;
