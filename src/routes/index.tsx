import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";
import { Home, Login, Signup } from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={<Home />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
