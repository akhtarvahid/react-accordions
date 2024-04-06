import React from 'react';
import './App.css';
import Accordion1 from './components/accordion1/SingleOpen';
import SingleToggle from './components/accordion2/SingleToggle';
import Accordion3 from './components/accordion3/Accordion3';

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Single Open</h3>
      <Accordion1 />

      <h3>Single Toggle</h3>
      <SingleToggle />

      <h3>Select inner value from accordions</h3>
      <Accordion3 />
    </div>
  );
}

export default App;
