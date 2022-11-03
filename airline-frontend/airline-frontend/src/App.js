import "./App.css";
import React from "react";
import FlightApp from "./components/FlightApp";
import PassengerInfo from "./components/PassengerInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import ConformationPage from "./components/ConformationPage"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
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
