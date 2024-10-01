import React from "react";
import { useState, useEffect } from "react";
import "./Calendar.css";
import DayCard from "./DayCard";
const Calendar = () => {
  const [currentDisplayedDate, setCurrentDisplayedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }))
  const [displayedDaysArray, setDisplayedDaysArray] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDayCard, setShowDayCard] = useState(false);
  const daysInWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  useEffect(() => {
    const currentMonth = currentDisplayedDate.getMonth();
    const currentYear = currentDisplayedDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(" ");
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
      daysArray.push(day);
    }
    setDisplayedDaysArray(daysArray);
  }, [currentDisplayedDate]);
  const handleMonthForward = () => {
    setCurrentDisplayedDate(
      new Date(currentDisplayedDate.getFullYear(), currentDisplayedDate.getMonth() + 1)
    );
  };
  const handleMonthBackward = () => {
    setCurrentDisplayedDate(
      new Date(currentDisplayedDate.getFullYear(), currentDisplayedDate.getMonth() - 1)
    );
  };
  const handleDayClicked = (e) => {
    setSelectedDate(
      e.target.id +
        ", " +
        currentDisplayedDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })
    );
    setShowDayCard(true);
  };
  return (
    <div className="calendar">
      <div className="calendar-title">
        <h1>Today is {currentDate}</h1>
        <h2>
          <button onClick={handleMonthBackward}>{"<"}</button>{" "}
          {currentDisplayedDate.toLocaleString("default", {month:"long", year:"numeric"})}
          <button onClick={handleMonthForward}>{">"}</button>
        </h2>
      </div>

      {showDayCard && <DayCard day={selectedDate} />}
      <div className="day-nameplate">
        {daysInWeek.map((day) => (
          <div key={day} className="day-nameplate-day">
            {day}
          </div>
        ))}
      </div>
      <div className="day-grid">
        {displayedDaysArray.map((day, index) => (
          <button
            id={day}
            key={index}
            className="day-grid-day"
            onClick={(e) => handleDayClicked(e)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
