import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactSession }  from 'react-client-session';


export default class PassengerInfo extends React.Component {
  
  postClientForm = (event) => {
    event.preventDefault();
    console.log(event.target.firstName.value);
    console.log(event.target.lastName.value);
    console.log(event.target.NIF.value);
    console.log(event.target.Age.value);
    console.log(event.target.luggage.value);
    const clientSessionId=ReactSession.get("userId");
    console.log(clientSessionId);
    const client={
      clientId:clientSessionId,
      name:event.target.firstName.value,
      surname:event.target.lastName.value,
      nationality:event.target.nationality.value,
      passportId:event.target.NIF.value,
      age:event.target.Age.value,
      luggage:event.target.luggage.value
    };
    axios.post('http://localhost:8080/clients/', client)
    .then(response => console.log(response));
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <form
            style={{
              border: "5px solid rgba(0, 0, 0, 0.05)",
              textAlign: "center",
            }}  onSubmit={this.postClientForm}
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
                  <input type="text" name="firstName" required></input>
                  <br></br>
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ felx: 0 }}>
                    Last Name:
                  </p>
                  <input type="text" name="lastName" required></input>
                  <br></br>
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ felx: 0 }}>
                    Nationality:
                  </p>
                  <input type="text" name="nationality" required></input>
                  <br></br>
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ felx: 0 }}>
                    Passport Number/ NIF:
                  </p>
                  <input type="text" name="NIF" required></input>
                  <br></br>
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ felx: 0 }}>
                    Age:
                  </p>
                  <input type="text" name="Age" required></input>
                  <br></br>
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ felx: 0 }}>
                    Will this Passenger have Carry on Luggage?
                  </p>
                  <p>Yes  or  No</p>
                  <input type="radio" name="luggage" value="true"></input>
                  <input type="radio" name="luggage" value="false"></input>
                  <br></br>
                </div>
                <div>
                  <button type="submit">
                    <Link to="/conformation">Confrim Flights</Link>
                  </button>
                </div>
              </div>
            </div>
        </form>
      </section>
    </React.Fragment>
  );
};

}
