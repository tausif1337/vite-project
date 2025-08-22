import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {

  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
