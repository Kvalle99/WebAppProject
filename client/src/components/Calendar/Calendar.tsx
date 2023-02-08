import React, { Component, FC, useState } from "react";
import "./Calendar.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="CalenderComponent">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => date && setSelectedDate(date)}
      />
    </div>
  );
}
export default CalendarComponent;
