import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";
import PlacementUpload from "./PlacementUpload";
import PlacementStudents from "./PlacementStudents";
import {Outlet} from "react-router-dom";
import Wt from "../landing/Wt";

export default function () {
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar />
        <Outlet/>
      </span>
    </div>
  );
}
