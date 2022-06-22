import React from "react";

import Container from "./components/Container";

import "./App.scss";

const menuItems = [
  {
    text: "remove",
    onClick: () => {
      console.log("remove text");
    },
  },
  {
    text: "edit",
    onClick: () => {
      console.log("edit text");
    },
  },
];
function App() {
  return (
    <div className="app">
      <div className="containers">
        <div className="containers__item">
          <Container menuItems={menuItems}>Container 1</Container>
        </div>

        <div className="containers__item">
          <Container menuItems={menuItems}>Container 2</Container>
        </div>

        <div className="containers__item">
          <Container menuItems={menuItems}>Container 3</Container>
        </div>
      </div>
    </div>
  );
}

export default App;
