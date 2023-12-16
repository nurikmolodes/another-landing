import getNow from "../assets/getNow.svg";
import '../styles/components/GetNow.scss'

const GetNow = () => {
  return (
    <div className="fourth-block">
      <p>Get now!</p>
      <img src={getNow} />
      <button>Try It Now</button>
    </div>
  );
};

export default GetNow;
