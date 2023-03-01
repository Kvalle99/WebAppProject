import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

interface OverivewProps {
    trip : any
}

export default function OverviewListItem(props : OverivewProps) {
    var acts : string[] = []

    for (let act of props.trip?.activities ?? [""]) {
        if (act?.name) {
          acts.push(act.name);
        } else {
          acts.push("");
        }
    }

    var fixedStartDate : string = trimDate((props.trip?.startDate ? props.trip.startDate : ""))
    var fixedEndDate : string = trimDate((props.trip?.endDate ? props.trip.endDate : ""))


  return (
    <ListGroupItem className="overflow-auto">
        <h4>Overview:</h4>
        <ul>
            <li> Destination: <br/>{props.trip?.destination ? props.trip.destination : ""}</li>
            <li> Start Date: <br/>{fixedStartDate}</li>
            <li> End Date: <br/>{fixedEndDate}</li>
            <li> Accomodation: {props.trip?.hotel ? props.trip.hotel : ""}</li>
            <li> Activities: 
                <ul>
                    {acts.map((act) => (
                        <li>
                            {act}
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    </ListGroupItem>
  )
}

function trimDate(date : string) : string {
    var trimmedDate : string = date

    if (date.length > 10) {
        trimmedDate = date.split("T")[0]

    }

    return (trimmedDate)
}