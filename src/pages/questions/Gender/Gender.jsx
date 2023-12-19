import { useEffect, useState } from "react";
import "./Gender.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Gender = () => {
  const genders = ["Male", "Female"];
  const [selectedGender, setSelectedGender] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const selectGender = (gender) => {
    setSelectedGender(gender);
    localStorage.setItem("gender", gender);
    navigate("/birthday");
  };
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    window.scrollTo(0, 0);
    const gender = localStorage.getItem("gender");
    if (gender) {
      setSelectedGender(gender);
    }
  }, []);
  return (
    <motion.div className="gender">
      <div className="title">
        <span>What’s your gender?</span>
      </div>
      <div className="description">
        <p>
          In Palmistry, everyone is a blend of masculine and feminine, so it helps to know yours.
        </p>
      </div>
      <div className="genders">
        {genders.map((item, index) => (
          <button
            className={item === selectedGender && "active"}
            key={index}
            onClick={() => selectGender(item)}>
            {item}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Gender;
