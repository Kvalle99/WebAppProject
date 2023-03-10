import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent, { simpleTripObject } from "./components/Navbar/Navbar";
import PlanSidenav, { Page } from "./components/plan-sidenav/PlanSidenav";
import axios from "axios";
import Planner from "./views/Planner";

function App() {
  const [myTrips, setTrips] = useState<simpleTripObject[]>([]);
  const [myTrip, setTrip] = useState<any | null>(null);
  const [chosenTripId, setTripId] = useState<number>(-1);
  const [page, setPage] = useState<Page>(Page.DESTINATION);
  const [userId, setId] = useState<number | undefined>();
  const [userToken, setToken] = useState<string>("");

  useEffect(() => {
    if (userId) {
      getMyTrips(true);
    } else {
      setTrips([]);
      setTrip(null);
    }
  }, [userId]);

  return (
    <div className="App">
      <NavbarComponent
        chooseTrip={changeTrip}
        trips={myTrips}
        createNewTrip={createNewTrip}
        chosenTrip={chosenTripId}
        setUser={setUser}
        loggedIn={userId !== undefined}
      />
      <div
        className="container-fluid"
        style={{ maxWidth: "1080 ", margin: "0 auto" }}
      >
        <div className="row">
          <div className="col-2">
            <PlanSidenav
              currentPage={page}
              changeView={changeView}
              trip={myTrip}
              loggedIn={userId !== undefined}
            />
          </div>
          <div
            className="col-10 overflow-hidden"
            style={{ height: "calc(100vh - 91px)" }}
          >
            <Planner
              myId={userId}
              currentTrip={myTrip}
              updateTrip={updateTrip}
              currentPage={page}
            />
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      ></script>
    </div>
  );

  function changeView(newPage: Page) {
    setPage(newPage);
  }

  function changeTrip(trip: number) {
    getTrip(userId!, trip);
    setTripId(trip);
  }
  function setUser(token: string, id?: number) {
    setId(id);
    setToken(token);
  }

  function createNewTrip(tripName: string) {
    const res = axios
      .post("http://localhost:8080/trip/createTrip", {
        userToken,
        userId,
        tripName,
      })
      .then((res) => {
        getMyTrips(false);
        changeTrip(res.data.id);
      });
  }

  function getTrip(myId: number, tripId: number) {
    //changed
    try {
      const res = axios
        .get("http://localhost:8080/trip/getTrip", {
          params: { userToken: userToken, myId: myId, tripId: tripId },
        })
        .then((res) => {
          setTrip(res.data);
          setTripId(res.data.id);
        });
    } catch (e) {
      console.log(e);
    }
  }

  function getMyTrips(updateCurrentTrip: boolean) {
    //changed
    const res = axios
      .get("http://localhost:8080/trip/getMyTrips", {
        params: { userToken: userToken, uId: userId },
      })
      .then((res) => {
        setTrips(res.data);
        if (updateCurrentTrip) {
          if (res.data[0] != undefined) {
            getTrip(userId!, res.data[0].id);
          } else {
            setTrip(null);
            setTripId(-1);
          }
        }
      });
  }
  function updateTrip() {
    getTrip(userId!, myTrip.id);
  }
}

export default App;
