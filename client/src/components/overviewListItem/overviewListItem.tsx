import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

interface OverivewProps {
    destination : string,
    startDate : string,
    endDate : string,
    hotel : string,
    activities : string[]
}

export default function OverviewListItem(props : OverivewProps) {
  return (
    <ListGroupItem>
        <h4>Overview:</h4>
        <ul>
            <li> Destination: {props.destination}</li>
            <li> Start Date: {props.startDate}</li>
            <li> End Date: {props.endDate}</li>
            <li> Accomodation: {props.hotel}</li>
            <li> Activities: 
                <ul>
                    {props.activities.map((act) => (
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
