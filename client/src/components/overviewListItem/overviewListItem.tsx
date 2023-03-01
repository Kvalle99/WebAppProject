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

  return (
    <ListGroupItem>
        <h4>Overview:</h4>
        <ul>
            <li> Destination: {props.trip?.destination ? props.trip.destination : ""}</li>
            <li> Start Date: {props.trip?.startDate ? props.trip.startDate : ""}</li>
            <li> End Date: {props.trip?.endDate ? props.trip.endDate : ""}</li>
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
