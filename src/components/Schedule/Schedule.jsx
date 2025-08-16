import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule">
      <h3>Schedule</h3>
      <div className="schedule-grid">
        <div className="time">9 am</div>
        <div className="event">Lukas Tapia</div>
        <div className="time">11 am</div>
        <div className="event">Lora Montes</div>
        <div className="time">1 pm</div>
        <div className="event">Sarah Perry</div>
      </div>
    </div>
  );
};

export default Schedule;
