import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import Why_tsec  from "./components/landing/Why_tsec";
import Signup_Login from "./components/landing/Signup_Login";
import Placement from "./components/Placement/Placement";

import Home from "./components/landing/Home";
import Dashboard from "./components/Dashboard/Dashboard.jsx";


import UserUI from "./components/UserUI/UserUI";
import Calendar from "./components/Calendar/Calendar";
import AdminCalendar from "./components/Calendar/adminCalendar";
import UploadJob from "./components/Placement/JobUp";
import LearnMore from "./components/landing/LearnMore";
import ResetPwd from "./components/ResetPassword/ResetPwd";
import "./App.css";
import "../index.css";
import JobUp from "./components/Placement/JobUp";
import PlacementJobs from "./components/Placement/PlacementJobs";
import PlacementDashboard from "./components/Placement/PlacementDashboard";
import PlacementStudents from "./components/Placement/PlacementStudents";
import PlacementUpload from "./components/Placement/PlacementUpload";
import PlacementStats from "./components/landing/PlacementStats";
import ContactUs from "./components/landing/ContactUs";
import OurRecruiters from "./components/landing/OurRecruiters";
import CollegeEnvoys from "./components/landing/CollegeEnvoys";
import UserProfile from "./components/UserUI/UserProfile";
import InterviewBlogs from "./components/landing/InterviewBlogs";
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
        <Route path="/" element={<LandingPage />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="whytsec" element={<Why_tsec />} />
          <Route path="login" element={<Signup_Login />} />
          <Route path="learnMore" element={<LearnMore />} />
          <Route path="PlacementStats" element={<PlacementStats />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="OurRecruiters" element={<OurRecruiters />} />
          <Route path="CollegeEnvoys" element={<CollegeEnvoys />} />
          <Route path="InterviewBlogs" element={<InterviewBlogs/>} />
        </ Route>
        
        <Route path="placement-cell" element={<Placement />}>
          <Route path="jobs" element={<PlacementJobs />}></Route>
          <Route path="dashboard" element={<PlacementDashboard />}></Route>
          <Route path="students" element={<PlacementStudents/>}></Route>
          <Route path="upload" element={<PlacementUpload/>}></Route>
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="user-page" element={<UserUI />} >
          <Route index element={<Dashboard />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/adminCalendar" element={<AdminCalendar />} />
        
        <Route path="/uploadJob" element={<JobUp />} />
      </Routes>
    </>
  );
};

export default App;
