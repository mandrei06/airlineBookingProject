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
              <label  style={{ backgroundColor: "lightgreen"}}>
                Passenger Name:<br/>
                Passenger ID: <br></br>
                Flight ID: <br></br>
                Carry on Luggage: <br></br>
                Flight From: <br></br>
                Flight to: <br></br>
                Flight Date: <br></br>
                Price: <br></br>
              </label>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default ConformationPage;
