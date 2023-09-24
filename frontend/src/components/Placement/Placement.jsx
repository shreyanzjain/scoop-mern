import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";

export default function () {
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar />
        {/* <PlacementDashboard/> */}
        <PlacementJobs/>
      </span>
    </div>
  );
}
