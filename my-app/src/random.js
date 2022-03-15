import React from "react";
import IntractiveView from "./intractiveView";

const Random = () => {
  let [randomValue, setRamdomValue] = React.useState(12);

  const onGenerateRamdomValue = () => {
    return setRamdomValue(Math.random());
  };

  return (
    <IntractiveView
      value={randomValue}
      onAction={onGenerateRamdomValue}
      actionText="Generate Ramdom Value"
    />
  );
};
// this component return random value
export default Random;