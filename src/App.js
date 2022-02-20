import React, { useState } from "react";
import { RouteDetails } from "./components/RouteDetails";
import { stops } from "./stops.js";
import "./App.scss";

function App() {
  const [schedulingStrategy, setSchedulingStrategy] = useState("fixed");
  const [canAddCargo, setCanAddCargo] = useState(false);

  return (
    <div className="App">
      <div>
        <select
          value={schedulingStrategy}
          onChange={(e) => setSchedulingStrategy(e.target.value)}
        >
          <option value="fixed">Fixed</option>
          <option value="semiFlexible">Semi flexible</option>
          <option value="flexible">Flexible</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={canAddCargo}
            onChange={(e) => setCanAddCargo(e.target.checked)}
          />
          Can add cargo
        </label>
      </div>
      <h1>Route</h1>
      <RouteDetails
        stops={stops}
        schedulingStrategy={schedulingStrategy}
        canAddCargo={canAddCargo}
      />
    </div>
  );
}

export default App;
