import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";
import PlacementUpload from "./PlacementUpload";
import PlacementStudents from "./PlacementStudents";
import {Routes, Route, Outlet} from "react-router-dom";


export default function () {
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar />
        <Outlet/>
        {/* <PlacementDashboard/> */}
        {/* <PlacementJobs/>  */}
        {/* <PlacementUpload/> */}
        {/* <PlacementStudents/> */}
      </span>
    </div>
  );
}
