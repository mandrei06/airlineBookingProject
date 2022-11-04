import React from "react";
import { ReactSession }  from 'react-client-session';
import { Link } from "react-router-dom";


function ConformationPage() {
  return (
    <React.Fragment>
      <section>
        <form
          style={{
            border: "5px solid rgba(0, 0, 0, 0.05)",
            textAlign: "center",
          }}
        >
          <header className="headDiv">
            {/* Header Section */}
            <div>
              <h1 style={{ backgroundColor: "green" }}>Conformation</h1>
            </div>
          </header>
          <div style={{ backgroundColor: "lightgreen", textAlign: "center" }}>
            <div className="Div1">
              <label style={{ backgroundColor: "lightgreen" }}>Passenger Name:{ReactSession.get("userName")}<br /></label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }} >Passenger ID:{ReactSession.get("userId")} </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight ID:{ReactSession.get("flightId")}</label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Carry on Luggage: {ReactSession.get("luggage")} </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight From: {ReactSession.get("flightOrigin")}</label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight to: {ReactSession.get("flightDestination")}</label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight Date: {ReactSession.get("flightDate")}</label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Price: {ReactSession.get("flightPrice")}</label>
            </div>
            <div>
                  <button type="submit">
                    <Link to="/">Book another flight?</Link>
                  </button>
                </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default ConformationPage;
