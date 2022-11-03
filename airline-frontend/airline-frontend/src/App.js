import './App.css';
import React from 'react';
import FlightApp from './components/FlightApp';
import PassengerInfo from './components/PassengerInfo'

function App() {
  return (
    <React.Fragment>
      <FlightApp></FlightApp>
        <PassengerInfo></PassengerInfo>
    </React.Fragment>
  );
};

export default App;
