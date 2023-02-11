import CalendarComponent from "../components/Calendar/Calendar";
import Destinations from "../Destinations/destinations";
import AccomodationView from "./plan-view/AccomodationView";

interface PlanneProps {
  viewToCShow: string;
}

function Planner(props: PlanneProps) {
  if (props.viewToCShow === "Destination") {
    return <Destinations />;
  }

  if (props.viewToCShow === "Duration") {
    return <CalendarComponent />;
  }

  if (props.viewToCShow === "Accomodation") {
    return <AccomodationView />;
  }
  return <></>;
}
export default Planner;
