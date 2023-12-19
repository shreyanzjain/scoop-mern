import React from "react";
import colorStatus from "./ColorStatus.json";
import statusText from './StatusToText.json';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

function JobRow({title, company, status}) {
  return (
      <div className="container flex px-2 items-center justify-between bg-whitesmoke border-b-2 border-licorice h-1/6">
        <div className="flex items-center">
          <div className="ms-2">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-lg ">{company}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <a className="border-2 rounded-xl px-2 py-1 border-licorice" style={{backgroundColor: colorStatus[status]}}>
              {statusText[status]}
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex items-center justify-between border-2 rounded-xl gap-1 px-2 py-0.5 border-licorice bg-licorice text-whitesmoke"
            >
              Details
              <OpenInNewRoundedIcon />
            </a>
          </div>
        </div>
      </div>
  );
}

export default JobRow;
