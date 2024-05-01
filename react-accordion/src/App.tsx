import React, { useState } from "react";
import "./App.css";
import Accordion1 from "./components/accordion1/SingleOpen";
import SingleToggle from "./components/accordion2/SingleToggle";
import Accordion3 from "./components/accordion3/Accordion3";

const App: React.FC = () => {
  const [singleOpen, setSingleOpen] = useState(false);
  const [singleToggle, setSingleToggle] = useState(false);
  const [multipleInner, setMultipleInner] = useState(false);
  return (
    <div className="App">
      <h1>Accordions</h1>
      <div className="row">
        <h3>Open one at once</h3>
        <button onClick={() => setSingleOpen((open) => !open)}>Sample</button>
      </div>
      {singleOpen && <Accordion1 />}

      <div className="row">
        <h3>Open or close one at once</h3>
        <button onClick={() => setSingleToggle((open) => !open)}>Sample</button>
      </div>
      {singleToggle && <SingleToggle />}

      <div className="row">
        <h3>Select inner value from multiple accordions</h3>
        <button onClick={() => setMultipleInner((open) => !open)}>
          Sample
        </button>
      </div>
      {multipleInner && <Accordion3 />}
    </div>
  );
};

export default App;
