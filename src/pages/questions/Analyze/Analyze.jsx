import { useEffect } from "react";
import "./Analyze.scss";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Analyze = ({ imgSrc }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", location.pathname);
    setTimeout(() => {
      navigate("/email");
    }, 10000);
  }, []);
  return (
    <div className="analyze">
      <img src={imgSrc} alt="palm" />
    </div>
  );
};

export default Analyze;
