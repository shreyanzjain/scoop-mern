import React from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

function VerificationStatus({verification_status}) {  
  if (verification_status) {
    return (
      <div className="flex items-center justify-between gap-2">
        <div>
          <a className="border-2 rounded-xl px-2 py-1 border-licorice bg-ashgray">
            Verified
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between gap-2">
        <div>
          <a className="border-2 rounded-xl px-2 py-1 border-licorice bg-whitesmoke">
            Not Verified
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flex items-center justify-between border-2 rounded-xl gap-1 px-2 py-0.5 border-tan bg-tan text-licorice"
          >
            Verify
            <OpenInNewRoundedIcon />
          </a>
        </div>
      </div>
    );
  }
}

function StudentRow({ f_name, l_name, branch, verification_status }) {
  return (
    <div className="container flex px-2 items-center justify-between bg-whitesmoke border-b-2 border-licorice h-20">
      <div className="flex items-center">
        <div className="ms-2">
          <p className="text-2xl font-bold">
            {f_name} {l_name}
          </p>
          <p className="text-lg ">{branch}</p>
        </div>
      </div>
      <VerificationStatus verification_status={verification_status} />
    </div>
  );
}

export default StudentRow;
