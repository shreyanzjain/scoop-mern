import styled from "styled-components";

import LandingPage from "./components/landing/LandingPage";
import Wt from "./components/landing/Wt";
import SiLo from "./components/landing/SiLo";
import Placement from "./components/Placement/Placement";
// import Home from "./components/Home";
import Home from "./components/landing/Home";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { Link, Routes, Route } from "react-router-dom";

import UserUI from "./components/UserUI/UserUI";
import Calendar from "./components/Calendar/Calendar";
import AdminCalendar from "./components/Calendar/adminCalendar";
import UploadJob from "./components/Placement/JobUp";
import LearnMore from "./components/landing/LM";
import ResetPwd from "./components/ResetPassword/ResetPwd";
import "./App.css";
import "../index.css";
import JobUp from "./components/Placement/JobUp";
import PlacementJobs from "./components/Placement/PlacementJobs";
import PlacementDashboard from "./components/Placement/PlacementDashboard";
import PlacementStudents from "./components/Placement/PlacementStudents";
import PlacementUpload from "./components/Placement/PlacementUpload";

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/whytsec" element={<Wt />} />
        <Route path="/login" element={<SiLo />} />
        <Route path="placement-cell" element={<Placement />}>
          <Route path="jobs" element={<PlacementJobs />}></Route>
          <Route path="dashboard" element={<PlacementDashboard />}></Route>
          <Route path="students" element={<PlacementStudents/>}></Route>
          <Route path="upload" element={<PlacementUpload/>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-page" element={<UserUI />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/adminCalendar" element={<AdminCalendar />} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/uploadJob" element={<JobUp />} />
      </Routes>
    </>
  );
};

export default App;
