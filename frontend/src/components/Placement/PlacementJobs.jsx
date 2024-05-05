import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import JobRow from "./JobRow";
import axios from "axios";
import { useState, useEffect } from "react";
import JobDetail from "./JobDetail";
// import jobs from "./Data.json";

function PlacementJobs() {
  const [listView, setListView] = useState(true);
  const [detailData, setDetailData] = useState({});
  const onClickDetail = async (id) => {
    await axios
      .get(`http://localhost:3000/jobs/get?id=${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setListView(false), setDetailData(res.data);
      });
  };

  const getData = async () => {
    await axios
      .get("http://localhost:3000/jobs/get", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      });
  };

  const onClickBack = () => {
    getData();
    setListView(true);
  };

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const jobList = jobs.map(({ job_role, company, status, id }) => (
    <JobRow
      key={id}
      id={id}
      title={job_role}
      company={company}
      status={status}
      onClickDetail={onClickDetail}
    />
  ));

  return (
    <div className="container m-2 w-5/6 bg-whitesmoke bg-opacity-30">
      {listView && (
        <>
          <div className="flex-col h-5/6 text-lg bg-whitesmoke text-licorice overflow-y-scroll">
            {jobList}
          </div>
        </>
      )}
      {!listView && (
        <div className="flex-col h-3/4 text-lg bg-whitesmoke text-licorice overflow-y-scroll">
          <JobDetail job={detailData} onClickBack={onClickBack} />
        </div>
      )}
    </div>
  );
}

export default PlacementJobs;
