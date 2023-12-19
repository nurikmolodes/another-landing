import { useEffect, useState } from "react";
import "./Birthday.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Birthday = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const isButtonDisabled = year === "" || month === "" || day === "";
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = () => {
    localStorage.setItem("birthday", JSON.stringify({ year: year, month: month, day: day }));
    navigate("/time");
  };

  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    const birthday = localStorage.getItem("birthday");
    if (birthday) {
      const data = JSON.parse(birthday);
      setYear(data?.year);
      setMonth(data?.month);
      setDay(data?.day);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="birthday">
      <div className="title">
        <span>What’s your date of birth?</span>
      </div>
      <div className="description">
        <p>Your birth date reveals your core personality traits, needs and desires.</p>
      </div>
      <section>
        <div className="input">
          <span>Year</span>
          <input
            value={year}
            type="number"
            placeholder="YYYY"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="input">
          <span>Month</span>
          <input
            value={month}
            type="number"
            placeholder="MM"
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div className="input">
          <span>Day</span>
          <input
            value={day}
            type="number"
            placeholder="DD"
            onChange={(e) => setDay(e.target.value)}
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

export default Birthday;
