import React from "react";
import { useMemo,useState } from "react";

const ExampleUseMemo = () => {

    const [number ,setNumber] = useState(5);

    const [count, setCount] = useState(0);

    const handleClick = () => {
        try {
            setNumber(number + 5);
        } catch (error) {
            console.log(error);
        }
    };

    const squared = useMemo (() => {
        return number * number;
    }, [number]);  

  return (
    <div>
      <h1>Use Memo</h1>
      <p>Number : {number}</p>
      <p>Squared ( Memorized ): {squared}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>

      <br />    
      <br/>
      <br/>
      <p>count:{count}</p>
      <button className="btn btn-primary" onClick={()=> setCount(count + 1)}>click</button>
    </div>
  );
};

export default ExampleUseMemo;
