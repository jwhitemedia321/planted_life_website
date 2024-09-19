import React from "react";
import { useState, useEffect } from "react";
import "./Calendar.css";
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [displayedDaysArray, setDisplayedDaysArray] = useState([]);

  const daysInWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  useEffect(() => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
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
  }, [currentDate]);
  const handleMonthForward = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };
  const handleMonthBackward = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };
  const handleDayClicked = (e) => {
    console.log(e.target.id);
  };
  return (
    <div className="calendar">
      <div className="calendar-title">
        <h2>
          <button onClick={handleMonthBackward}>{"<"}</button>{" "}
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}{" "}
          <button onClick={handleMonthForward}>{">"}</button>
        </h2>
      </div>
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
