import React from "react";

const Counter = () => {

  let [count, setCounter] = React.useState(0);
  console.log(count);
  console.log(setCounter);
  // useState for setting the initinal value of counter and setting updated value also automatically
  // and done this automatically for you

  const onclickHandler = () => {
    console.log("I am click");
    setCounter(count+1);
    // when you passing arrguments in setCounter then updated value is automatically seted in count state.
    // every variable in React called state and chage in variable called change in state. 
    
  };
  return (
    <React.Fragment>
      <p>{count}</p>
      
      <button type="button" onClick={onclickHandler}>
        Increment
      </button>
      
    </React.Fragment>
    
  );
};

export default Counter;
 