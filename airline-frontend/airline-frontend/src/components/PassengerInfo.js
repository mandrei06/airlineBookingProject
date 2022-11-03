import React from "react";
import { Link } from "react-router-dom";

const PassengerInfo = () => {
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
              <h1 style={{ backgroundColor: "orangered" }}>Passenger</h1>
            </div>
          </header>
          <div style={{ backgroundColor: "lightpink", textAlign: "center" }}>
            <div className="Div1">
              <div>
                <p className="text-xl font-bold" style={{ felx: 0 }}>
                  First Name:
                </p>
                <input type="text" name="firstName"></input>
                <br></br>
              </div>
              <div>
                <p className="text-xl font-bold" style={{ felx: 0 }}>
                  Last Name:
                </p>
                <input type="text" name="lastName"></input>
                <br></br>
              </div>
              <div>
                <p className="text-xl font-bold" style={{ felx: 0 }}>
                  Passport Number/ NIF:
                </p>
                <input type="text" name="NIF"></input>
                <br></br>
              </div>
              <div>
                <p className="text-xl font-bold" style={{ felx: 0 }}>
                  Age:
                </p>
                <input type="text" name="Age"></input>
                <br></br>
              </div>
              <div>
                <p className="text-xl font-bold" style={{ felx: 0 }}>
                  Will this Passenger have Carry on Luggage?
                </p>
                <p>Yes  or  No</p>
                <input type="radio" name="luggage" value="yes"></input>
                <input type="radio" name="luggage" value="no"></input>
                <br></br>
              </div>
          <button type="submit">
                <Link to="/conformation">Confrim Flights</Link>
                </button>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default PassengerInfo;
