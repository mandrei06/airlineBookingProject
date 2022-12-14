import React from "react";
import "./FlightApp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

export default class FlightApp extends React.Component {
  state = {
    flights: [],
    origins: [],
    destinations: [],
    dates: [],
    /*bookingId: '',
    clientId: '',
    flightId: ''*/
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/flights/all`).then((res) => {
      const flights = res.data;
      this.setState({ flights });
    });
  }

  postOrigin(origin) {
    var originId = "" + origin;
    window.originId = originId.split(":")[1];
    window.origin = originId.split(":")[0];
    origin = originId.split(":")[0];
    const flightDate = originId.split(":")[2];
    const flightPrice = originId.split(":")[3];
    ReactSession.set("flightOrigin", origin);
    ReactSession.set("flightDate", flightDate);
    ReactSession.set("flightPrice", flightPrice);
    axios
      .get(`http://localhost:8080/flights/` + origin + "/destinations")
      .then((res) => {
        const destinations = res.data;
        this.setState({ destinations });
        console.log(destinations);
      });
  }
  postDest(destination) {
    console.log(destination + window.origin);
    window.destination = destination;
    ReactSession.set("flightDestination", destination);

    axios
      .get(`http://localhost:8080/flights/` + window.origin + "/" + destination)
      .then((res) => {
        const dates = res.data;
        this.setState({ dates });
        console.log(dates);
      });
  }
  postForm = () => {
    const clientCode = Math.floor(Math.random() * 1000);
    const bookingCode = Math.floor(Math.random() * 1000);
    const flightCode = window.originId * 1;
    ReactSession.set("userId", clientCode);
    ReactSession.set("flightId", flightCode);
    const booking = {
      bookingId: bookingCode,
      flightId: flightCode,
      clientId: clientCode,
    };

    axios
      .post("http://localhost:8080/bookings/", booking)
      .then((response) => console.log(response));

    const navigate = useNavigate();
    navigate("/passenger");
  };

  postDate(date) {
    console.log(window.destination + window.origin + date);
    window.dateOfFlight = date;
  }
  displayReturningDates() {
    console.log("display");
    const box = document.getElementById("returnDates");
    box.style.display = "block";
  }
  hideReturningDates() {
    console.log("hide");
    const box = document.getElementById("returnDates");
    box.style.display = "none";
  }

  render() {
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
              <div
                className="h-24 flex justify-center items-center shadow"
                style={{ height: 24 }}
              >
                <h1
                  className="uppercase font-bold text-4xl text-center"
                  style={{ backgroundColor: "deepskyblue" }}
                >
                  Flight booking app
                </h1>
              </div>
            </header>
            <br></br>
            {/* body Section */}
            <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
              <div className="Div1">
                <div
                  className="flex items-center space-x-2"
                  style={{ felx: 1 }}
                >
                  <input
                    type="radio"
                    id="show"
                    value="show"
                    name="round"
                    onChange={this.hideReturningDates}
                  ></input>
                  <p className="text-xl font-bold" style={{ felx: 0 }}>
                    One Way
                  </p>
                  <input
                    type="radio"
                    id="hide"
                    value="hide"
                    onChange={this.displayReturningDates}
                    name="round"
                  ></input>
                  <p className="text-xl font-bold">Round Trip</p>
                </div>
                <hr />
                {/* Departure */}
                <div>
                  <b>Flying From?</b>
                  <select
                    name="originsDropdown"
                    onChange={(event) => this.postOrigin(event.target.value)}
                  >
                    <option>"Please select an origin"</option>
                    {this.state.flights.map((flight) => (
                      <option
                        key={flight.flightId}
                        value={
                          flight.origin +
                          ":" +
                          flight.flightId +
                          ":" +
                          flight.date +
                          ":" +
                          flight.price
                        }
                      >
                        {flight.origin}
                      </option>
                    ))}
                  </select>
                  <br></br>
                  <br></br>
                </div>
                {/* Arrival */}
                <div>
                  <b>Flying To?</b>
                  <select
                    name="destinationsDropdown"
                    onChange={(event) => this.postDest(event.target.value)}
                  >
                    <option>--Select Destination--</option>
                    {this.state.destinations.map((destination) => (
                      <option key={destination} value={destination}>
                        {destination}
                      </option>
                    ))}
                  </select>
                  <br></br>
                </div>

                <hr></hr>
                {/**date selection */}
                <div>
                  <b>Departure Available Dates</b>
                  <select
                    name="datesDropdown"
                    onChange={(event) => this.postDate(event.target.value)}
                  >
                    <option>--Select Date--</option>
                    {this.state.dates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>
                <br></br>
                <div>
                  <div id="returnDates">
                    <b>Returning Dates</b>
                    <select name="returnDatesDropdown">
                      <option>--Select Date--</option>
                      {this.state.dates.map((date) => (
                        <option key={date} value={date}>
                          {date}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr />
                <div>
                  <b>Number of Passengers Older than 9</b>
                  <input id="olderThan9" type="number" max={10} min={0} />
                </div>
                <div>
                  <b>Number of Passengers between 9 and 2</b>
                  <input id="between9And2" type="number" max={10} min={0} />
                </div>
                <div>
                  <b>Number of Passengers younger than 10</b>
                  <input id="youngerThan2" type="number" max={10} min={0} />
                </div>
                <button id="saveInfo" type="submit" onClick={this.postForm}>
                  <Link to="/passenger">Save Infos</Link>
                </button>
              </div>
              <br></br>
              <div></div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}
