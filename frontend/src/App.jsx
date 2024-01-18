import { Link, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";
import Placement from "./components/Placement/Placement";
import UserUI from "./components/UserUI/UserUI";

import "./App.css";
import "../index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
         
        </Route>

        <Route path="placement-cell" element={<Placement />}></Route>

        
        <Route path="user-page" element={<UserUI />}>
          
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
