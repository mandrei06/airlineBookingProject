import "./App.css";
import React from "react";
import FlightApp from "./components/FlightApp";
import PassengerInfo from "./components/PassengerInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import ConformationPage from "./components/ConformationPage"
import { ReactSession }  from 'react-client-session';
import 'reactjs-popup/dist/index.css';
import {
  Route,
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
           <Route path="/flightapp" 
            element={<FlightApp></FlightApp>}></Route>
            <Route path="conformation" 
            element={<ConformationPage></ConformationPage>}></Route>
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
