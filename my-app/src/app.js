import React from "react";
import Counter from "./counter";
import Decrement from "./decrement";
import Random from "./random";

const App = () => {
  return (
    <React.Fragment>
      <Counter />
      <Random />
      <Decrement/>
    </React.Fragment>
  );
};

export default App;
