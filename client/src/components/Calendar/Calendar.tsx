import React, { Component, FC, useImperativeHandle, useState } from "react";
import "./Calendar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface calProps {
  startDate?: Date;
  endDate?: Date;
  saveDates: Function;
}

function CalendarComponent(props: calProps) {
  var startDate: Date = new Date();
  var endDate: Date = new Date();

  if (props.startDate) startDate = new Date(props.startDate);

  if (props.endDate) endDate = new Date(props.endDate);

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    startDate
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(endDate);

  //set initial dates if they exists

  return (
    <div className="CalenderComponent">
      <div className="container">
        <div className="row">
          <h4>Choose when to travel!</h4>
          <div className="col-2">
            <h5>Enter start date</h5>
            <DatePicker
              selected={selectedStartDate}
              onChange={(date) => date && setSelectedStartDate(date)}
            />
          </div>
          <div className="col-2">
            <h5>Enter Date</h5>
            <DatePicker
              selected={selectedEndDate}
              onChange={(date) => date && setSelectedEndDate(date)}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => saveChanges()}
        >
          Save!
        </button>
      </div>
    </div>
  );

  function saveChanges() {
    console.log("dates to send:");
    console.log(selectedStartDate);
    console.log(selectedEndDate);

    props.saveDates(selectedStartDate, selectedEndDate);
  }
}

export default CalendarComponent;
