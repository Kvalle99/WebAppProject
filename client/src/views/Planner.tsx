import CalendarComponent from "../components/Calendar/Calendar";
import AccomodationView from "./plan-view/AccomodationView";
import Destinations from "./plan-view/DestinationsView/destinations";

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
