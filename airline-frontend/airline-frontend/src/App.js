import "./App.css";
import React from "react";
import FlightApp from "./components/FlightApp";
import PassengerInfo from "./components/PassengerInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import ConformationPage from "./components/ConformationPage"
import { ReactSession }  from 'react-client-session';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  ReactSession.setStoreType("localStorage");
  return (
    <React.Fragment>
      <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
        <BrowserRouter>
          <Routes>
            <Route path="passenger" 
            element={<PassengerInfo></PassengerInfo>}></Route>
           <Route path="/" 
            element={<FlightApp></FlightApp>}></Route>
            <Route path="conformation" 
            element={<ConformationPage></ConformationPage>}></Route>
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
