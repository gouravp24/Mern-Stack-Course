import React, { useRef } from "react";

const ExampleUseRefHook = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    try {
      inputRef.current.focus();
    } catch (error) {
      console.log();
    }
  };
  return (
    <div>
      <h1> Use ref</h1>

      <input
        type="text"
        placeholder="Enter you Full Name"
        className="input-group-text"
        ref={inputRef}
        inputRef
      />
      <br />
      <button className="btn - btn-primary" onClick={handleClick}>
        {" "}
        Click{" "}
      </button>
    </div>
  );
};

export default ExampleUseRefHook;