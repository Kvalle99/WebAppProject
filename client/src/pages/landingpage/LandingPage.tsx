import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export function LandingPage() {
  return (
    <div className="LandingPage">
      <link rel="stylesheet" href="/LandingPage.css"></link>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Welcome to Plan Parrot!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={require("../../images/landingLogo.png")}
              width="150"
              id="animatedLogo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="#" className="animatedText">
              Explore
            </a>
          </div>
          <div className="col">
            <a href="#" className="animatedText">
              Plan
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="explore.html">
              <img
                src={require("../../images/landingExploreImage.jpg")}
                width="480"
                className="resizeImg"
              />
            </a>
          </div>
          <div className="col">
            <a href="/plan">
              <img
                src={require("../../images/landingPlanImage.jpg")}
                width="480"
                className="resizeImg"
              />
            </a>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      ></script>
    </div>
  );
}
