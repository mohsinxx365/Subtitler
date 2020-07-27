import React from "react";
import MainContent from "./components/MainContent";
import Supplier from "./components/Supplier";
import { Paper } from "@material-ui/core";

const App = () => {
  let test = () => {
    //@ts-ignore
    window.session.test("hello");
  };

  return (
    <Supplier>
      <div>
        <h1>Test</h1>
        <button onClick={test}>Test</button>
        <MainContent />
        <Paper>Hello</Paper>
      </div>
    </Supplier>
  );
};

export default App;
