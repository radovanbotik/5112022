import React from "react";
import { useState, useEffect } from "react";
import "./TripList.css";

export default function TripList() {
  const [data, setData] = useState([]);
  const [URL, setURL] = useState("http://localhost:3000/trips");
  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => setData(data));
  }, [URL]);

  const trips = data.map(trip => {
    return (
      <li key={trip.id}>
        <h2>{trip.title}</h2>
        <p>{trip.price}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>Triplist:</h1>
      <ul className="trip-list">{trips}</ul>
      <div className="filters">
        <button
          onClick={() =>
            setURL("http://localhost:3000/trips?location=Slovakia")
          }
        >
          Trips to Slovakia
        </button>
        <button
          onClick={() => setURL("http://localhost:3000/trips?location=Hungary")}
        >
          Trips to Hungary
        </button>
        <button onClick={() => setURL("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
