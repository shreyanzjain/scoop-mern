import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import Placement from "./components/Placement/Placement";


import Dashboard from "./components/Dashboard/Dashboard.jsx";
import UserUI from "./components/UserUI/UserUI";
import Calendar from "./components/Calendar/Calendar";
import AdminCalendar from "./components/Calendar/adminCalendar";


import "./App.css";
import "../index.css";

import UserProfile from "./components/UserUI/UserProfile";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
         
        </Route>

        <Route path="placement-cell" element={<Placement />}></Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="user-page" element={<UserUI />}>
          <Route index element={<Dashboard />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/adminCalendar" element={<AdminCalendar />} />
      </Routes>
    </>
  );
};

export default App;
