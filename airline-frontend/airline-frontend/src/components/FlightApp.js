import React from "react";
import './FlightApp.css';
import axios from 'axios';


export default class FlightList extends React.Component {
    state = {
      flights: []
    }
  
    componentDidMount() {
        axios.get(`http://localhost:8080/flights/all`)
        .then(res => {
          const flights = res.data;
          this.setState({ flights });
          console.log(flights);
        })
    }
  
    render(){
    return (
    <React.Fragment>
        <section>
            <form style={{border: '5px solid rgba(0, 0, 0, 0.05)', textAlign: "center"}}>
                <header className="headDiv" >
                    {/* Header Section */}
                    <div className="h-24 flex justify-center items-center shadow" style={{height: 24}}>
                        <h1 className="uppercase font-bold text-4xl text-center" style={{backgroundColor: "gray"}}>Flight booking app</h1>
                    </div>
                </header>
                <br></br> 
                {/* body Section */}
                <div style={{backgroundColor: "lightgray", textAlign: "center"}}>
                    <div>
                        <div>
                            <div className="Div1">
                                <div className="flex items-center space-x-2" style={{felx: 1}} >
                                    <input
                                    type="radio"
                                    className="w-6 h-6"
                                    ></input>
                                    <p className="text-xl font-bold">Round Trip</p>
                                    <input
                                    type="radio"
                                    className="w-6 h-6"
                                    ></input>
                                    <p className="text-xl font-bold"  style={{felx: 0}}>One Way</p>
                                    <br></br>
                                </div>
                            </div>
                            <div>Error</div>
                        </div>
                        {/* Departure */}
                        <div>
                            <div>
                                <div>
                                    <b >Flying From?</b>
                                    <select options={
                                        this.state.flights
                                        .map(flight =>
                                            <li key={flight.id}>{flight.origin}</li>
                                        )
                                    
                                    }></select>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                        {/* Arrival */}
                        <div>
                            <div>
                                <div>
                                    <b >Flying To?</b>
                                    <select>
                                        <option>--Select Airtport--</option>
                                    </select>
                                    <br></br>
                                </div>
                                <div>Error</div>
                            </div>
                        ---------------------------------------
                        </div>
                        {/**date selection */}
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <b>Departure Date</b>
                                        <input type='date'/>
                                    </div>
                                    <div>Error</div>
                                </div>
                            </div>
                        </div>
                        -----------------------------------------
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <b>Return Date</b>
                                        <input type='date'/>
                                    </div>
                                    <div>Error</div>
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
                                        <input type="number" max={10} min={0}/>
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
                    </div>
                </div>
            </form>
        </section>
    </React.Fragment>
    );
};


}