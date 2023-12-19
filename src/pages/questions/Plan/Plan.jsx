/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Plan.scss";
import { useLocation, useNavigate } from "react-router-dom";
import plan from "../../assets/plan.png";

const Plan = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", location.pathname);
  }, []);
  const [activeOption, setActiveOption] = useState("$13.21");
  const options = [
    { price: "$1.00", id: 1, stick: false },
    { price: "$5.00", id: 2, stick: false },
    { price: "$9.00", id: 3, stick: false },
    { price: "$13.21", id: 4, stick: true },
  ];
  const chooseOption = (price) => {
    setActiveOption(price);
    localStorage.setItem("plan", price);
  };
  const navigate = useNavigate();
  const next = () => {
    navigate("/paywall");
  };
  return (
    <div className="plan">
      <header>
        <span>hithisisme@gmail.com</span>
        <div className="avatar">H</div>
      </header>
      <div className="title">
        <p>
          We've helped millions of people to reveal the destiny of their love life and what the
          future holds for them and their families.
        </p>
      </div>
      <img src={plan} />
      <div className="options">
        {options.map((item) => (
          <div
            key={item.id}
            className={`option ${item.price === activeOption && "active"}`}
            onClick={() => chooseOption(item.price)}>
            {item.price}
            {item.stick && (
              <div className={`stick ${item.price === activeOption && "stick-active"}`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="submit">
        <p className={activeOption === "$13.21" && "active"}>
          It costs us $13.21 to compensate our Hint employees for the trial, but please choose the
          amount you are comfortable with.
        </p>
        <button onClick={next}>Continue</button>
      </div>
    </div>
  );
};

export default Plan;
