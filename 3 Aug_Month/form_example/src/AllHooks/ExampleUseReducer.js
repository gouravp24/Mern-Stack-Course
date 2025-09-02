import React, { useReducer } from "react";

const ExampleUseReducer = () => {
  const reducer = (currentValue, payload) => {
    console.log("Current Value:", currentValue);
    console.log("Payload:", payload);
    if (payload.type === "add") {
      return currentValue + 5;
    }
    return currentValue;
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const handleAdd = () => {
    try {
      dispatch({ type: "add" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Use Reducer Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ExampleUseReducer;
