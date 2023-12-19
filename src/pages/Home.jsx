import { useNavigate } from "react-router-dom";
import heart from "../assets/heart.svg";
import star from "../assets/star.svg";
import user from "../assets/user.svg";
import Footer from "../components/Footer";
import GetNow from "../components/GetNow";
import "../styles/pages/Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="first-block">
        <div className="content">
          <div className="left">
            <p>Explore life using contemporary astrology.</p>
            <span>We are making astrology easy for better understanding.</span>
            <button onClick={() => navigate("/name")}>Try It Now</button>
          </div>
        </div>
      </div>
      <div className="second-block">
        <div className="text">
          <p>Astrology tailored just for you.</p>
          <span>
            AstroPulse crafts a unique astrological profile for you, blending data to offer
            personalized insights. Receive 1-on-1 guidance and wisdom from skilled astrologers in a
            friendly and enjoyable manner.
          </span>
        </div>
        <div className="three-blocks">
          <div className="block">
            <img src={heart} />
            <p>Compatibility</p>
            <span>
              Reports of your compatibility in relationship, friendship just in a seconds!
            </span>
          </div>
          <div className="block">
            <img src={star} />
            <p>Horoscope</p>
            <span>
              Gain exclusive insights to prepare for the future using real-time data on planetary
              positions and movements.
            </span>
          </div>
          <div className="block">
            <img src={user} />
            <p>Your chart</p>
            <span>
              Define your chart and understand your personality with all the essential information
              you need.
            </span>
          </div>
        </div>
      </div>
      <GetNow />
      <Footer />
    </div>
  );
};

export default Home;
