import React, { Component, FC, useImperativeHandle, useState } from "react";
import "./Calendar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface calProps {
  startDate?: any;
  endDate?: any;
}

function CalendarComponent(props: calProps) {
  var startDate: Date = new Date();
  var endDate: Date = new Date();

  if (props.startDate)
    startDate = new Date(
      props.startDate.year,
      //month is indexed from zero
      props.startDate.month - 1,
      props.startDate.day
    );

  if (props.endDate)
    endDate = new Date(
      props.endDate.year,
      //month is indexed from zero
      props.endDate.month - 1,
      props.endDate.day
    );

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
        <button type="button" className="btn btn-success">
          Save!
        </button>
      </div>
    </div>
  );
}
export default CalendarComponent;
