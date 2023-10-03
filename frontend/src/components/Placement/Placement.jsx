import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";
import PlacementUpload from "./PlacementUpload";
import PlacementStudents from "./PlacementStudents";

export default function () {
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar />
        {/* <PlacementDashboard/> */}
        {/* <PlacementJobs/>  */}
        <PlacementUpload/>
        {/* <PlacementStudents/> */}
      </span>
    </div>
  );
}
