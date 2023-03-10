import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

interface OverivewProps {
  trip: any;
  loggedIn: boolean;
}

export default function OverviewListItem(props: OverivewProps) {
  var acts: string[] = [];

  for (let act of props.trip?.activities ?? ["Not selected"]) {
    if (act?.name) {
      acts.push(act.name);
    } else {
      acts.push("Not selected");
    }
  }

  if (acts.length == 0) {
    acts.push("None selected");
  }

  var fixedStartDate: string = trimDate(
    props.trip?.startDate ? props.trip.startDate : "Not selected"
  );
  var fixedEndDate: string = trimDate(
    props.trip?.endDate ? props.trip.endDate : "Not selected"
  );

  return (
    <>
      {props.loggedIn ? (
        <ListGroupItem>
          {props.trip == null ? (
            <h4>No trip chosen</h4>
          ) : (
            <>
              <h4>Overview:</h4>
              <ul>
                <li>
                  <b>Destination:</b> <br />
                  {props.trip?.destination
                    ? props.trip.destination
                    : "Not selected"}
                </li>
                <li>
                  <b>Start Date:</b> <br />
                  {fixedStartDate}
                </li>
                <li>
                  <b>End Date:</b> <br />
                  {fixedEndDate}
                </li>
                <li>
                  <b>Accomodation:</b> <br />
                  {props.trip?.hotel ? props.trip.hotel : "Not selected"}
                </li>
                <li>
                  <b>Activities: </b>
                  <ul>
                    {acts.map((act) => (
                      <li>{act}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </>
          )}
        </ListGroupItem>
      ) : (
        <ListGroupItem className="overflow-auto">
          <h4>Not logged in?</h4>
          <output>Start by logging in at the top right corner!</output>
        </ListGroupItem>
      )}
    </>
  );
}

function trimDate(date: string): string {
  var trimmedDate: string = date;

  if (date.length > 10) {
    trimmedDate = date.split("T")[0];
  }

  return trimmedDate;
}
