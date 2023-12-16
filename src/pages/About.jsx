import React from "react";
import "../styles/pages/About.scss";
import matrix from "../assets/matrix.svg";
import GetNow from "../components/GetNow";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <div className="first-block">
        <p>About Astrology</p>
        <img src={matrix} />
        <button>Try It Now</button>
      </div>
      <div className="second-block">
        <div className="wrapper">
          <span>Decode Your Destiny with Hint Astrology</span>
          <p>
            At <a href="">Hint</a>, we believe your birth chart holds the keys to unlocking your
            greatest potential. Our app provides personalised astrological insights to help you
            navigate all of life's adventures and challenges.
          </p>
          <p>
            We go beyond superficial sun sign horoscopes to deliver hyper-personalised guidance
            based on the unique positioning of planets at your exact time and location of birth. Our
            advanced AI technology synthesises NASA data along with astrological principles to
            generate your natal chart and detailed reports. 
          </p>
        </div>
      </div>
      <GetNow />
      <Footer />
    </div>
  );
};

export default About;
