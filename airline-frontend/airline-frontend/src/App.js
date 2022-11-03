import "./App.css";
import React from "react";
import FlightApp from "./components/FlightApp";
import PassengerInfo from "./components/PassengerInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

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
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
