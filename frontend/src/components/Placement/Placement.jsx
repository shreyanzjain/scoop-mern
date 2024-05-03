import PlacementNavbar from "./PlacementNavbar";
import SideBar from "./SideBar";
import PlacementDashboard from "./PlacementDashboard";
import PlacementJobs from "./PlacementJobs";
import PlacementUpload from "./PlacementUpload";
import PlacementStudents from "./PlacementStudents";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminCalendar from "../Calendar/adminCalendar";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      await axios
        .get("http://localhost:3000/user/auth_test", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (
            res.data.entityRole == "ADMIN" ||
            res.data.entityRole == "ENVOY"
          ) {
            setUserText(res.data.entityEmail);
          } else {
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
          setUserText("You are not logged in!");
        });
    }

    fetchUserData();
  }, []);

  const [userText, setUserText] = useState("");
  const [showComponent, setShowComponent] = useState(1);
  const onClickOption = (value) => {
    setShowComponent(value);
  };

  return (
    <div>
      <PlacementNavbar userText={userText} />
      <span className="flex mx-0">
        <SideBar onClickOption={onClickOption} optionValue={showComponent} />
        {showComponent == 1 && <PlacementDashboard />}
        {showComponent == 2 && <PlacementJobs />}
        {showComponent == 3 && <PlacementStudents />}
        {showComponent == 4 && <PlacementUpload />}
        {showComponent == 5 && <AdminCalendar />}
      </span>
    </div>
  );
}
