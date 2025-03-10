import React, { useMemo, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { useLocation } from "react-router-dom";
import { getDateString } from "../../../shared/lib/getDate/getDate";

const Date = ({ value, setValue }) => {
  const location = useLocation();
  const queryString = location.search;

  const params = new URLSearchParams(queryString);

  const [show, setShow] = useState(params.get("date") == "open");

  return (
    <div className="top__date">
      <button className="top__date-button" onClick={() => setShow((s) => !s)}>
        {getDateString(value)}
      </button>
      {show && (
        <Calendar
          className={"calendar"}
          onChange={setValue}
          value={value}
        />
      )}
    </div>
  );
};

export default Date;
