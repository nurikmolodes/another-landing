import { useEffect, useState } from "react";
import "./Wish.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Wish = () => {
  const options = ["Love & Relationship", "Health & Vitality", "Career & Destiny"];
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const select = (item) => {
    setOption(item);
    localStorage.setItem("wish", item);
    if (item === "Love & Relationship") {
      navigate("/relationship");
    } else {
      navigate("/resonate");
    }
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", location.pathname);
    const data = localStorage.getItem("wish");
    if (data) {
      setOption(data);
    }
  }, []);
  return (
    <div className="wish">
      <p>What aspects of your life do you wish to gain insight into through palmistry?</p>
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

export default Wish;
