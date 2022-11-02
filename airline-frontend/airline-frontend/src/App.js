import './App.css';
import React from 'react';
import FlightApp from './components/FlightApp';

function App() {
  return (
    <React.Fragment>
      <FlightApp></FlightApp>
        <div>
          <label style={{backgroundColor: "lightblue"}}>
             </label>
             <input type="submit" 
              value="FIND FLIGHTS!" 
              style={{backgroundColor: "lightblue"}}/>
        </div>
    </React.Fragment>
  );
};

export default App;
