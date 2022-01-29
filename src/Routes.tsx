import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:username" element={<User />} />
    </Routes>
  );
}
