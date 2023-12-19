import { useEffect, useState } from "react";
import "./Decisions.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Decisions = () => {
  const options = ["Heart", "Head", "Both"];
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const select = (item) => {
    setOption(item);
    localStorage.setItem("decisions", item);
    navigate("/guidance");
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", location.pathname);
    const data = localStorage.getItem("decisions");
    if (data) {
      setOption(data);
    }
  }, []);
  return (
    <div className="decisions">
      <p>Do you make decisions with your head or your heart?</p>
      <div className="options">
        {options.map((item, index) => (
          <button className={item === option && "active"} onClick={() => select(item)} key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Decisions;
