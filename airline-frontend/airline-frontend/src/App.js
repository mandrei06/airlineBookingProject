import "./App.css";
import React from "react";
import FlightApp from "./components/FlightApp";
import PassengerInfo from "./components/PassengerInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession }  from 'react-client-session';

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
        <BrowserRouter>
          <Routes>
            <Route path="passenger" 
            element={<PassengerInfo></PassengerInfo>}></Route>
           <Route path="/" 
            element={<FlightApp></FlightApp>}></Route>
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
