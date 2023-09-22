import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";

export default function () {
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar />
        <PlacementDashboard/>
      </span>
    </div>
  );
}
