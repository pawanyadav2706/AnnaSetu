import { Routes, Route } from "react-router-dom";
import LandingPrototype from "./prototypes/LandingPrototype.jsx";
import KitchenPrototype from "./prototypes/KitchenPrototype.jsx";
import FleetPrototype from "./prototypes/FleetPrototype.jsx";
import NgoPrototype from "./prototypes/NgoPrototype.jsx";
import DemoPrototype from "./prototypes/DemoPrototype.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPrototype />} />
      <Route path="/prototype" element={<LandingPrototype />} />
      <Route path="/prototype/kitchen" element={<KitchenPrototype />} />
      <Route path="/prototype/fleet" element={<FleetPrototype />} />
      <Route path="/prototype/ngo" element={<NgoPrototype />} />
      <Route path="/prototype/demo" element={<DemoPrototype />} />
    </Routes>
  );
}
