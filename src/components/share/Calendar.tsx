import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/styles/react-big-calendar.scss";

import { Calendar as RBC, CalendarProps, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  const minTime = new Date();
  minTime.setHours(8, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(18, 0, 0);
  return (
    <RBC
      {...props}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      view={props.view ?? "week"}
      toolbar={false}
      min={minTime}
      max={maxTime}
    ></RBC>
  );
}
