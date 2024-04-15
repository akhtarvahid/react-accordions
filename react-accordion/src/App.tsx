import React from 'react';
import './App.css';
import Accordion1 from './components/accordion1/SingleOpen';
import SingleToggle from './components/accordion2/SingleToggle';
import Accordion3 from './components/accordion3/Accordion3';

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Open one at once</h3>
      <Accordion1 />

      <h3>Open or close one at once</h3>
      <SingleToggle />

      <h3>Select inner value from multiple accordions</h3>
      <Accordion3 />
    </div>
  );
}

export default App;
