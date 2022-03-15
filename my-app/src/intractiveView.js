import React from "react";

const IntractiveView = ({ value, onAction, actionText }) => {
  
  return (
    <React.Fragment>
      <p>{value}</p>

      <button type="button" onClick={onAction}>
        {actionText}
      </button>
    </React.Fragment>
  );
};
// this is the Intractive view now anyone can access this view 
// it return view of counter

export default IntractiveView;