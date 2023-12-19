import "../styles/pages/About.scss";
import matrix from "../assets/matrix.svg";
import GetNow from "../components/GetNow";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="first-block">
        <p>About Astrology</p>
        <img src={matrix} />
        <button onClick={() => navigate("/name")}>Try It Now</button>
      </div>
      <div className="second-block">
        <div className="wrapper">
          <span>Unravel your Path with AstroPulse.</span>
          <p>
            Unlock the secrets to your greatest potential through your birth chart. AstroPulse
            offers personalized astrological insights, guiding you through life's adventures and
            challenges.
          </p>
          <p>
            We delve deeper than superficial sun sign horoscopes, providing highly personalized
            guidance based on the precise positions of planets at your exact time and place of
            birth.
          </p>
        </div>
      </div>
      <GetNow />
      <Footer />
    </div>
  );
};

export default About;
