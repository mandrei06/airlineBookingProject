import React from "react";
import "./FlightApp.css";
import axios from "axios";

export default class FlightApp extends React.Component {
  state = {
    flights: [],
    origins: [],
    destinations: [],
    dates: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/flights/all`).then((res) => {
      const flights = res.data;
      this.setState({ flights });
    });
  }

  postOrigin(origin) {
    console.log(origin);
    window.origin = origin;

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

    axios
      .get(`http://localhost:8080/flights/` + window.origin + "/" + destination)
      .then((res) => {
        const dates = res.data;
        this.setState({ dates });
        console.log(dates);
      });
  }
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
                  style={{ backgroundColor: "lightblue" }}
                >
                  Flight booking app
                </h1>
              </div>
            </header>
            <br></br>
            {/* body Section */}
            <div style={{ backgroundColor: "skyblue", textAlign: "center" }}>
              <div>
                <div>
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
                      <br></br>
                    </div>
                  </div>
                </div>
                {/* Departure */}
                <div>
                  <div>
                    <div>
                      <b>Flying From?</b>
                      <select
                        name="originsDropdown"
                        onChange={(event) =>
                          this.postOrigin(event.target.value)
                        }
                      >
                        <option>"Please select an origin"</option>
                        {this.state.flights.map((flight) => (
                          <option key={flight.flightId} value={flight.origin}>
                            {flight.origin}
                          </option>
                        ))}
                      </select>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
                {/* Arrival */}
                <div>
                  <div>
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
                  </div>
                </div>
                {/**date selection */}
                <div>
                  <div>
                    <div>
                      <div>
                        <b>Departure Available Dates</b>
                        <select
                          name="datesDropdown"
                          onChange={(event) =>
                            this.postDate(event.target.value)
                          }
                        >
                          <option>--Select Date--</option>
                          {this.state.dates.map((date) => (
                            <option key={date} value={date}>
                              {date}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div id="returnDates">
                      <div>
                        <div>
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
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <b>Number of Passengers Older than 9</b>
                          <input type="number" max={10} min={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <b>Number of Passengers between 9 and 2</b>
                          <input type="number" max={10} min={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <b>Number of Passengers younger than 10</b>
                          <input type="number" max={10} min={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label style={{ backgroundColor: "green" }}></label>
                  <input
                    type="submit"
                    value="FIND FLIGHTS!"
                    style={{ backgroundColor: "limegreen" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}
