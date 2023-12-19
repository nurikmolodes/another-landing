import { useNavigate } from "react-router-dom";
import heart from "../assets/heart.svg";
import star from "../assets/star.svg";
import user from "../assets/user.svg";
import Footer from "../components/Footer";
import GetNow from "../components/GetNow";
import "../styles/pages/Home.scss";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <div className="first-block">
        <div className="content">
          <div className="left">
            <p>Navigate through life with the help of modern astrology</p>
            <span>The #1 educating people by simplifying astrology for a greater awareness</span>
            <button onClick={() => navigate("/name")}>Try It Now</button>
          </div>
        </div>
      </div>
      <div className="second-block">
        <div className="text">
          <p>Hyper-personalized astrology</p>
          <span>
            Hint combines NASA data to produce the blueprint of your astrological identity, with
            1-on-1 guidance and knowledge from professional astrologers, to provide personalized
            insights, with a fun and friendly approach.
          </span>
        </div>
        <div className="three-blocks">
          <div className="block">
            <img src={heart} />
            <p>Compatibility</p>
            <span>Create your compatibility reports on intimacy, friendship, family and work</span>
          </div>
          <div className="block">
            <img src={star} />
            <p>Horoscope</p>
            <span>
              Access your unique insights to better prepare for the future based on the real-time
              data of each planetary position and movement
            </span>
          </div>
          <div className="block">
            <img src={user} />
            <p>Your chart</p>
            <span>Everything you need to know to decode your chart and your personality</span>
          </div>
        </div>
      </div>
      <GetNow />
      <Footer />
    </div>
  );
};

export default Home;
