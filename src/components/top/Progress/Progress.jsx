import { useLocation } from "react-router-dom";
import "./Progress.scss";

const Progress = () => {
  const location = useLocation();
  const percentage =
    location.pathname === "/name"
      ? 17
      : location.pathname === "/gender"
      ? 34
      : location.pathname === "/birthday"
      ? 51
      : location.pathname === "/time"
      ? 68
      : location.pathname === "/place"
      ? 85
      : location.pathname === "/email"
      ? 100
      : 0;

  const number =
    location.pathname === "/name"
      ? 1
      : location.pathname === "/gender"
      ? 2
      : location.pathname === "/birthday"
      ? 3
      : location.pathname === "/time"
      ? 4
      : location.pathname === "/place"
      ? 5
      : location.pathname === "/email"
      ? 6
      : "";

  return (
    <div className="progress">
      <div className="count">{number}/6</div>
      <div className="bar">
        <div className="left-circle"></div>
        <div className="fill" style={{ width: `${percentage}%` }}></div>
        <div className={`right-circle ${location.pathname === "/guidance" && "filled"}`}></div>
      </div>
    </div>
  );
};

export default Progress;
