import React from "react";

const Counter = () => {
  const onclickHandler = () => {
    console.log("I am click");
  };
  return (
    <React.Fragment>
      <p>0</p>
      <button type="button" onClick={onclickHandler}>
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
