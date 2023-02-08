import React, { Component, FC, useState } from "react";
import "./Calendar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CalendarComponent() {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    new Date()
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(
    new Date()
  );

  return (
    <div className="CalenderComponent">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <DatePicker
              selected={selectedStartDate}
              onChange={(date) => date && setSelectedStartDate(date)}
            />
          </div>
          <div className="col-2">
            <DatePicker
              selected={selectedEndDate}
              onChange={(date) => date && setSelectedEndDate(date)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CalendarComponent;
