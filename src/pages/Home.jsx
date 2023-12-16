import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import together from "../assets/together.svg";
import there from "../assets/there.svg";
import heart from "../assets/heart.svg";
import star from "../assets/star.svg";
import user from "../assets/user.svg";
import getNow from "../assets/getNow.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="first-block">
        <Navbar />
        <div className="content">
          <div className="left">
            <p>Navigate through life with the help of modern astrology</p>
            <span>The #1 educating people by simplifying astrology for a greater awareness</span>
            <button>Try It Now</button>
          </div>
        </div>
      </div>
      {/* <div className="second-block">
        <div className="left">
          <img src={there} />
        </div>
        <div className="right">
          <p>Heading 2 → Hyper-personalized astrology</p>
          <span>
            Hint combines NASA data to produce the blueprint of your astrological identity, with
            1-on-1 guidance and knowledge from professional astrologers, to provide personalized
            insights, with a fun and friendly approach.
          </span>
        </div>
      </div>
      <div className="third-block">
        <div className="block">
          <img src={heart} />
          <p>Compatibility</p>
          <span>Create your compatibility reports on intimacy, friendship, family and work</span>
        </div>
        <div className="block">
          <img src={star} />
          <p>Horoscope</p>
          <span>
            Access your unique insights to better prepare for the future based on the real-time data
            of each planetary position and movement
          </span>
        </div>
        <div className="block">
          <img src={user} />
          <p>Your chart</p>
          <span>Everything you need to know to decode your chart and your personality</span>
        </div>
      </div>
      <div className="fourth-block">
        <p>Get now!</p>
        <img src={getNow} />
      </div> */}
    </div>
  );
};

export default Home;
