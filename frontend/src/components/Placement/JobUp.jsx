import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementUpload from "./PlacementUpload";


export default function () {
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar />
        <PlacementUpload/>
       
      </span>
    </div>
  );
}