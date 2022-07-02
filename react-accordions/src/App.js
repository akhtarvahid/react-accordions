import './App.css';
import Accordion1 from './components/accordion1/SingleOpen';
import SingleToggle from './components/accordion2/SingleToggle';

function App() {
  return (
    <div className="App">
      <h3>Single Open</h3>
      <Accordion1 />

      <h3>Single Toggle</h3>
      <SingleToggle />
    </div>
  );
}

export default App;
