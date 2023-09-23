import styled from "styled-components";
import LandingPage from "./components/landing/LandingPage";

import Placement from "./components/Placement/Placement";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "../index.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard </Link>
          </li>
          <li>
            <Link to="/landing">Landing </Link>
          </li>
          <li>
            <Link to="/placement-cell"> Placement </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/placement-cell" element={<Placement />} />
      </Routes>
    </>
  );
}

export default App;
