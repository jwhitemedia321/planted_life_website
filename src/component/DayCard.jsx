import React, { useState } from "react";
import "./DayCard.css";
const DayCard = ({ day }) => {
  const [displayNewTaskForm, setDisplayNewTaskForm] = useState(false);
  const [displayNewMeetingForm, setDisplayNewMeetingForm] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    startDay: day,
    dueDate: "",
    description: "",
  });
  const [newMeeting, setNewMeeting] = useState({
    name: "",
    startDay: day,
    time: "",
    description: "",
    users: [],
  });
  const [meetings, setMeetings] = useState([]);
  const [tasks, setTasks] = useState([]);
  // Complete validation in forms for meetings / tasks
  // to ensure user enters conditions properly for database
  // Make the form only appear when necessary,
  // always display tasks / meetings when clicking dates.

  const handleTaskSubmission = (e) => {
    e.preventDefault();

    // const { error } = await
    // supabase.from("tasks").insert({
    // })
  };
  return (
    <div className="day-card">
      <h1>{day}</h1>
      <div className="day-tasks">
        <button
          onClick={() => {
            if (displayNewTaskForm === false) {
              setDisplayNewTaskForm(true);
            } else {
              setDisplayNewTaskForm(false);
            }
          }}
        >
          +Task
        </button>
        {displayNewTaskForm && (
          <form className="task-form" onSubmit={(e) => handleTaskSubmission(e)}>
            <h2>Add Task</h2>
            <label htmlFor="taskName">Name:</label>
            <input
              type="text"
              id="taskName"
              required
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
            <label htmlFor="taskDueDate">Due Date:</label>
            <input
              type="text"
              id="taskDueDate"
              required
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({ ...newTask, dueDate: e.target.value })
              }
            />
            <label htmlFor="taskDescription">Description:</label>
            <input
              type="text"
              id="taskDescription"
              required
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
            <button>Submit</button>
          </form>
        )}
      </div>

      <button
        onClick={() => {
          if (displayNewMeetingForm === false) {
            setDisplayNewMeetingForm(true);
          } else {
            setDisplayNewMeetingForm(false);
          }
        }}
      >
        +Meeting
      </button>
      {displayNewMeetingForm && (
        <div className="day-meetings">
          <form
            className="meeting-form"
            onSubmit={(e) => handleMeetingSubmission(e)}
          >
            <h2>Add Meeting</h2>
            <label htmlFor="meetingName">Name:</label>
            <input
              type="text"
              id="meetingName"
              required
              value={newMeeting.name}
              onChange={(e) =>
                setNewMeeting({ ...newMeeting, name: e.target.value })
              }
            />
            <label htmlFor="meetingTime">Time:</label>
            <input
              type="text"
              id="meetingTime"
              required
              value={newMeeting.time}
              onChange={(e) =>
                setNewMeeting({ ...newMeeting, time: e.target.value })
              }
            />
            <label htmlFor="meetingDescription">Description:</label>
            <input
              type="text"
              id="meetingDescription"
              required
              value={newMeeting.description}
              onChange={(e) =>
                setNewMeeting({ ...newMeeting, description: e.target.value })
              }
            />
            <label htmlFor="meetingUsers">Participants:</label>
            <input
              type="text"
              id="meetingUsers"
              required
              value={newMeeting.users}
              onChange={(e) =>
                setNewMeeting({ ...newMeeting, users: e.target.value })
              }
            />
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DayCard;
