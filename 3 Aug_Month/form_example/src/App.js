import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExampleCustomHook from "./AllHooks/ExampleCustomHook";
import ExampleUseMemo from "./AllHooks/ExampleUseMemo";
import ExampleUseReducer from "./AllHooks/ExampleUseReducer";
import ExampleUseRef from "./AllHooks/ExampleUseRef";
import { useState } from "react";

function App() {
  const [showCustomHooks, setShowCustomHooks] = useState(false);
  const [showUseMemo, setShowUseMemo] = useState(false);
  const [showUseReducer, setShowUseReducer] = useState(false);
   const [showUseRef, setshowUseRef] = useState(false);
  const handleCustomHook = () => {
    try {
      setShowUseMemo(false);
      setShowUseReducer(false);
      setshowUseRef(false);
      setShowCustomHooks(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUseMemo = () => {
    try {
      setShowCustomHooks(false);
      setShowUseReducer(false);
      setshowUseRef(false);
      setShowUseMemo(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUseReducer = () => {
    try {
      setShowCustomHooks(false);
      setShowUseMemo(false);
      setshowUseRef(false);
       setShowUseReducer(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUseRef = () => {
    try {
      setShowCustomHooks(false);
      setShowUseMemo(false);
      setShowUseReducer(false);
      setshowUseRef(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-1 mx-4">
            <button className="btn btn-primary" onClick={handleCustomHook}>
              customHook
            </button>
          </div>
          <div className="col-md-1 mx-4">
            <button className="btn btn-primary" onClick={handleUseMemo}>
              useMemo
            </button>
          </div>
          <div className="col-md-1 mx-4">
            <button className="btn btn-primary" onClick={handleUseReducer}>
              useReducer
            </button>
          </div>
          <div className="col-md-1 mx-4">
            <button className="btn btn-primary" onClick={handleUseRef}>
              useRef
            </button>
          </div>
        </div>
      </div>

      {showCustomHooks && <ExampleCustomHook />}
      {showUseMemo && <ExampleUseMemo />}
      {showUseReducer && <ExampleUseReducer />}
      {showUseRef && <ExampleUseRef/>}
    </div>
  );
}

export default App;
