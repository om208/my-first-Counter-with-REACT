import React from "react";
import IntractiveView from "./intractiveView";

const Decrement = () => {
  let [decrement, setDecrement] = React.useState(100);

  const onDecrementHandel = () => {
    setDecrement(decrement - 1);
    // hear we pass the argument in setDecrement function
    // then state of var decrement changed
  };

  return (
    <IntractiveView
      value={decrement}
      onAction={onDecrementHandel}
      actionText="Decrement counter"
    />
  );
};
// this component reuse <IntractiveView/> component 
// perform decrement operation and Rerender its view
// when value means state of var decrement is update <Decrement/> component completly rerender 
export default Decrement;
