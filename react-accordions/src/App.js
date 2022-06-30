import './App.css';
import Accordion1 from './components/accordion1/SingleOpen';
import SingleToggle from './components/accordion2/SingleToggle';

function App() {
  return (
    <div className="App">
      <h3>Accordions</h3>
      <Accordion1 />
      <SingleToggle />
    </div>
  );
}

export default App;
