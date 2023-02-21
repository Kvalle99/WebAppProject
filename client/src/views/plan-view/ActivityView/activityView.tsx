import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { act } from 'react-dom/test-utils';
import ActivityCard from '../../../components/ActivityCard/activityCard';

interface Activity {
    name : string;
    description : string;
}

interface ActivityProps {
    actAdder : Function;
    id : any
}

function ActivityView(props : ActivityProps) {
    const [activites, setActivities] = useState<Activity[] | null>(null);

    useEffect(() => {
      getActivities();
    }, []);

  
    return (
      <Container>
        <Row xs={1} md={3}>
          {activites?.map((activity) => (
            <div>
              <ActivityCard
                activityName={activity.name}
                activityDesc={activity.description}
                activityAdder={props.actAdder}
                id = {props.id}
              />  
            </div>
          ))}
        </Row>
      </Container>
    );
  
    function getActivities() {
      const dest = axios
        .get("http://localhost:8080/activity/getAllActivites")
        .then((res) => {
          setActivities(res.data);
        });
      return;
    }
}

export default ActivityView;
