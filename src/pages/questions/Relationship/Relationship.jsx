import { useEffect, useState } from "react";
import "./Relationship.scss";
import { useNavigate } from "react-router-dom";

const Relationship = () => {
  const options = ["Single", "In a relationship"];
  const [option, setOption] = useState("");
  const navigate = useNavigate();
  const select = (item) => {
    setOption(item);
    localStorage.setItem("relationship", item);
    navigate("/resonate");
  };
  useEffect(() => {
    const data = localStorage.getItem("relationship");
    if (data) {
      setOption(data);
    }
  }, []);
  return (
    <div className="relationship">
      <p>So we can get to know you better, please tell us your relationship status.</p>
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

export default Relationship;
