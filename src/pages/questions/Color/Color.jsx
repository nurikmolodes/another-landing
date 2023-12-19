import { useEffect, useState } from "react";
import "./Color.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Color = () => {
  const options = [
    {
      name: "Red",
      color: "red",
    },
    {
      name: "Yellow",
      color: "yellow",
    },
    {
      name: "Blue",
      color: "blue",
    },
    {
      name: "Orange",
      color: "orange",
    },
    {
      name: "Green",
      color: "green",
    },
    {
      name: "Violet",
      color: "violet",
    },
  ];
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const select = (item) => {
    setOption(item);
    localStorage.setItem("color", item);
    navigate("/decisions");
  };
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    const data = localStorage.getItem("color");
    if (data) {
      setOption(data);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="color">
      <p>Which color do you like the most?</p>
      <div className="options">
        {options.map((item, index) => (
          <button
            className={item.name === option && "active"}
            onClick={() => select(item.name)}
            key={index}>
            <div className="circle" style={{ background: `${item.color}` }}></div>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Color;
