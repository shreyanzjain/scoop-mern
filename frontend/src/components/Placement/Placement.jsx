import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";
import PlacementUpload from "./PlacementUpload";
import PlacementStudents from "./PlacementStudents";
import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [userText, setUserText] = useState("");
  const [showComponent, setShowComponent] = useState(1);
  const onClickOption = (value) => {
    setShowComponent(value);
  };

  useEffect(() => {
    async function fetchUserData() {
      await axios
        .get("http://127.0.0.1:3000/user/get_user_data", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setUserText(res.data.email);
        })
        .catch((err) => {
          console.log(err);
          setUserText("You are not logged in!")
        });
    };

    fetchUserData();
  }, []);
  return (
    <div>
      <PlacementNavbar userText={userText} />
      <span className="flex mx-0">
        <SideBar onClickOption={onClickOption} optionValue={showComponent} />
        {showComponent == 1 && <PlacementDashboard />}
        {showComponent == 2 && <PlacementJobs />}
        {showComponent == 3 && <PlacementStudents />}
        {showComponent == 4 && <PlacementUpload />}
      </span>
    </div>
  );
}
