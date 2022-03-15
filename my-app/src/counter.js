import React from "react";
const IntractiveView = ({ value, onAction, actionText }) => {
  // return view of counter
  return (
    <React.Fragment>
      <p>{value}</p>

      <button type="button" onClick={onAction}>
        {actionText}
      </button>
    </React.Fragment>
  );
};

// we build reusable component for view of counter [above component]
// this reusable component called Generic view

const Counter = () => {
  let [counter, setCounter] = React.useState(0);
  console.log(counter);
  console.log(setCounter);

  // useState for setting the initinal value of counter and setting updated value also automatically
  // and done this automatically for you

  const onIncrementHandler = () => {
    console.log("I am click");
    setCounter(counter + 1);
    // when you passing arrguments in setCounter then updated value is automatically seted in count state.
    // every variable in React called state and chage in variable called change in state.
  };
  return (
    <IntractiveView
      value={counter}
      onAction={onIncrementHandler}
      actionText="Increment"
    />
  );
};

export default Counter;
