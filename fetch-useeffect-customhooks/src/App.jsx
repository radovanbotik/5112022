import { useState } from "react";
import TripList from "./Components/TripList";
import "./App.css";

function App() {
  const [showTrips, setShowTrips] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
