import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
  const [URL, setURL] = useState("http://localhost:3000/trips");
  const { data, isPending, error } = useFetch(URL);

  return (
    <div>
      <h1>Triplist:</h1>
      {isPending && <div>Loading Trips...</div>}
      {error && <div>{error}</div>}
      <ul className="trip-list">
        {data &&
          data.map(trip => {
            return (
              <li key={trip.id}>
                <h2>{trip.title}</h2>
                <p>{trip.price}</p>
              </li>
            );
          })}
      </ul>
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
