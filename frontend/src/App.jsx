import { Routes, Route } from "react-router-dom";
import LandingPrototype from "./prototypes/LandingPrototype.jsx";
import RoleSelectPrototype from "./prototypes/RoleSelectPrototype.jsx";
import KitchenPrototype from "./prototypes/KitchenPrototype.jsx";
import NgoPrototype from "./prototypes/NgoPrototype.jsx";
import AnimalPrototype from "./prototypes/AnimalPrototype.jsx";
import SimplePrototype from "./prototypes/SimplePrototype.jsx";
import FleetPrototype from "./prototypes/FleetPrototype.jsx";
import DemoPrototype from "./prototypes/DemoPrototype.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPrototype />} />
      <Route path="/login" element={<RoleSelectPrototype />} />
      <Route path="/dashboard/kitchen" element={<KitchenPrototype />} />
      <Route path="/dashboard/ngo" element={<NgoPrototype />} />
      <Route path="/dashboard/animal" element={<AnimalPrototype />} />
      <Route path="/prototype" element={<SimplePrototype />} />
      <Route path="/prototype/kitchen" element={<KitchenPrototype />} />
      <Route path="/prototype/fleet" element={<FleetPrototype />} />
      <Route path="/prototype/ngo" element={<NgoPrototype />} />
      <Route path="/prototype/demo" element={<DemoPrototype />} />
    </Routes>
  );
}
