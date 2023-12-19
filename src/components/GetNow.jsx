import { useNavigate } from "react-router-dom";
import getNow from "../assets/getNow.svg";
import "../styles/components/GetNow.scss";

const GetNow = () => {
  const navigate = useNavigate();
  return (
    <div className="fourth-block">
      <p>Get now!</p>
      <img src={getNow} />
      <button onClick={() => navigate("/name")}>Try It Now</button>
    </div>
  );
};

export default GetNow;
