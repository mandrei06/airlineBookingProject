import React from "react";

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
              <label style={{ backgroundColor: "lightgreen" }}>Passenger Name:<br /></label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }} >Passenger ID: </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight ID:</label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Carry on Luggage: </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight From: </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight to: </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Flight Date: </label>
              <br></br>
              <label style={{ backgroundColor: "lightgreen" }}>Price: </label>


            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default ConformationPage;
