import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/home";
import { Login } from "../pages/Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={<Home />}/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
