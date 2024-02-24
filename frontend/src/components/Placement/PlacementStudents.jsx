import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import StudentRow from "./StudentRow";
import { useEffect } from "react";
import axios from "axios";

function PlacementStudents() {
  const [showList, setShowList] = useState(true);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://127.0.0.1:3000/student/all", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        });
    };
    getData();
  }, []);

  function handleBack() {
    setShowList(true);
  }

  async function handleVerify(id) {
    await axios
      .get(`http://127.0.0.1:3000/student/get?id=${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        setStudent(res.data.data);
        setShowList(false);
      });
  }

  const studentList = students.map(({ name, branch, verified, id }) => (
    <StudentRow
      key={id}
      id={id}
      name={name}
      branch={branch}
      verification_status={verified}
      handleVerify={handleVerify}
    />
  ));

  const studentData = (
    <div>
      <div className="flex h-10 items-center">
        <div
          className="bg-tan h-7 ms-2 w-1/12 text-center text-licorice rounded-sm hover:cursor-pointer"
          onClick={handleBack}
        >
          Back
        </div>
        <div
          className="bg-ashgray h-7 ms-2 w-1/12 text-center text-licorice rounded-sm hover:cursor-pointer"
          onClick={handleBack}
        >
          Verify
        </div>
      </div>
      {Object.keys(student).map((key) => (
        <p className="ms-2" key={key}>
          <strong>{key}</strong>: {student[key]}
        </p>
      ))}
    </div>
  );

  return (
    <div className="w-5/6 m-2">
      <div className="container h-16 w-full border-b-2 border-licorice bg-whitesmoke shadow-sm">
        <div className="flex w-full h-full items-center justify-between">
          <div className="text-licorice text-xl font-bold ms-4">
            <div className="flex-col items-center justify-start">
              <p>Bulk Upload</p>
              <div className="flex items-center text-gray-700">
                <InfoIcon style={{ fontSize: "18px" }} className="me-1" />
                <p className="text-sm">
                  Upload a .csv file with the columns - email & password.
                </p>
              </div>
            </div>
          </div>
          <form>
            <input
              type="file"
              className="px-2 py-1.5 border-2 border-licorice rounded-md me-2"
            />
            <button
              type="submit"
              className="bg-licorice text-white py-1 px-2 rounded-xl me-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex-col h-5/6 w-full text-lg bg-whitesmoke text-licorice mt-2">
        <div className="container w-full h-full mt-0 bg-whitesmoke bg-opacity-30 overflow-y-auto">
          {showList && studentList}
          {!showList && studentData}
        </div>
      </div>
    </div>
  );
}

export default PlacementStudents;
