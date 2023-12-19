import { useEffect, useState } from "react";
import "./Time.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Time = () => {
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState("");
  const isButtonDisabled = time === "";
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = () => {
    localStorage.setItem("time", time);
    navigate("/place");
  };

  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    const time = localStorage.getItem("time");
    if (time) {
      setTime(time);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="time">
      <div className="title">
        <span>What’s your time of birth?</span>
      </div>
      <div className="description">
        <p>Your time of birth reveals your core personality traits, needs and desires.</p>
      </div>
      <section>
        <div className="input">
          <span>Time</span>
          <input
            value={time}
            type="time"
            placeholder="Type time..."
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </section>
      <button
        className={isButtonDisabled && "disabled"}
        disabled={isButtonDisabled}
        onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default Time;
