import React from "react";
import { useState } from "react";
import "./Loader.css";

const UI = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [flightPrices, setFlightPrices] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://flight-price-tracker.vercel.app:5432/api/flights?origin=${origin}&destination=${destination}&startDate=${startDate}&endDate=${endDate}`
      );
      const data = await response.json();
      setFlightPrices(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching flight prices:", error);
      setLoading(false);
      alert("Failed to fetch flight prices.");
    }
  };

  return (
    <>
      <h1>
        <center>Get Flight Prices between two cities</center>
      </h1>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          id="origin"
          className=" "
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />

        <input
          type="text"
          id="destination"
          className=""
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="date"
          id="startDate"
          className=""
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <input
          type="date"
          id="endDate"
          className=""
          placeholder="End Date"
          value={endDate}
          min={startDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <button className="btn" type="submit">
          Get Flight Prices
        </button>
      </form>

      <div className="flightPriceResults">
        {loading ? (
          <div className="loader-circle"></div>
        ) : (
          flightPrices.map((flight, index) => (
            <div className="mainDiv">
              <div key={index} className="elements">
                <div className="firstLine">
                  <div className="firstLine2">
                    <img src={flight.thumbnail}></img>
                    <p className="name">{flight.companyName}</p>
                  </div>
                  <p className="duration">Duration:{flight.duration}</p>
                  <p className="price"> Price: {flight.price}</p>
                </div>
                <div>
                  <div className="firstLine">
                    <p className="starting">
                      Starting Airport:{flight.airportLeave}
                    </p>
                    <p className="destination">
                      Destination Airport:{flight.airportArive}
                    </p>
                  </div>
                  <div className="lastline">
                    <p className="layover">Layover:{flight.layover}</p>
                  </div>
                </div>
              </div>
              {/* <hr></hr> */}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UI;
