import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";
import PlacementUpload from "./PlacementUpload";
import PlacementStudents from "./PlacementStudents";
import { useState } from "react";

export default function () {
  const [showComponent, setShowComponent] = useState(1);
  const onClickOption = (value) => {
    setShowComponent(value);
  };
  return (
    <div>
      <PlacementNavbar />
      <span className="flex mx-0">
        <SideBar onClickOption={onClickOption} optionValue={showComponent}/>
        {showComponent == 1 && <PlacementDashboard />}
        {showComponent == 2 && <PlacementJobs />}
        {showComponent == 3 && <PlacementStudents />}
        {showComponent == 4 && <PlacementUpload />}
      </span>
    </div>
  );
}
