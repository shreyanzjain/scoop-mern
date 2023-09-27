import styled from "styled-components";
import LandingPage from "./components/landing/LandingPage";

import Placement from "./components/Placement/Placement";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { Link, Routes, Route } from "react-router-dom";

import UserUI from "./components/UserUI/UserUI";
import Calendar from "./components/Calendar/Calendar"
import AdminCalendar from "./components/Calendar/adminCalendar";
import ResetPwd from "./components/ResetPassword/ResetPwd"
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
          <li>
            <Link to="/user-page">User Home Page</Link>
          </li> 
          <li>
            <Link to="/calendar">Calendar</Link>
          </li> 
          <li>
            <Link to="/adminCalendar">Admin Calendar</Link>
          </li>
          <li>
            <Link to="/reset">Reset Password</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/placement-cell" element={<Placement />} />
        <Route path="/user-page" element={<UserUI />} />  
        <Route path="/calendar" element={<Calendar />} />  
        <Route path="/adminCalendar" element={<AdminCalendar/>} />
        <Route path="/reset" element={<ResetPwd />} />  
             
      </Routes>
    </>
  );
}

export default App;
