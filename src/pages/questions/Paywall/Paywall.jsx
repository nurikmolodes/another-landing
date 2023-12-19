import { useEffect, useState } from "react";
import "./Paywall.scss";
import { useLocation } from "react-router-dom";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import hint from "../../assets/hint-paywall.png";
import palm from "../../assets/palm-paywall.png";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import taurus from "../../assets/taurus.png";
import cancer from "../../assets/cancer.png";
import you from "../../assets/you.png";
import capricorn from "../../assets/capricorn.png";
import saturn from "../../assets/saturn.png";
import air from "../../assets/air.png";
import blue from "../../assets/blue.png";
import user from "../../assets/user.webp";
import insights from "../../assets/insights.png";

const Paywall = () => {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    window.scrollTo(0, 0);
  }, []);
  const [time, setTime] = useState(900); // 15 minutes in seconds
  const [timerActive, setTimerActive] = useState(true);
  useEffect(() => {
    let countdown;

    if (timerActive && time > 0) {
      countdown = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timerActive, time]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;

    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  };

  return (
    <div className="wrapper">
      <header>
        <span>hithisisme@gmail.com</span>
        <div className="avatar">H</div>
      </header>
      <div className="paywall">
        <section className="sevendaytrial">
          <div className="top">
            <div className="left">
              <img src={hint} />
              <p>Find your happiness with highly personalized predictions</p>
            </div>
            <div className="right">
              <img src={palm} />
            </div>
          </div>
          <div className="bottom">
            <div className="title">
              <span>Unlock predictions and...</span>
            </div>
            <ul>
              <li>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.6406 5H10.3281C10.1406 5 9.98437 5.14083 9.98437 5.32859C9.82812 7.53485 7.51563 9.78805 5.3125 9.99146C5.14063 10.0071 5 10.1636 5 10.3357V10.6643C5 10.8521 5.14062 10.9929 5.32812 11.0085C7.51562 11.165 9.75 13.4339 9.98437 15.6401C10 15.8435 10.1719 16 10.3906 16H10.6094C10.8281 16 11 15.8435 11.0156 15.6245C11.2031 13.1522 13.1875 11.1181 15.6563 10.9929C15.8594 10.9772 16 10.8208 16 10.6174V10.3357C16 10.1323 15.8438 9.97582 15.6563 9.96017C13.1719 9.83499 11.1719 7.78521 11.0156 5.28165C10.9844 5.14083 10.8281 5 10.6406 5Z"
                    fill="#066FDE"></path>
                </svg>{" "}
                <span>Find love, success, and happiness through the guidance of palmistry</span>
              </li>
              <li>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.6406 5H10.3281C10.1406 5 9.98437 5.14083 9.98437 5.32859C9.82812 7.53485 7.51563 9.78805 5.3125 9.99146C5.14063 10.0071 5 10.1636 5 10.3357V10.6643C5 10.8521 5.14062 10.9929 5.32812 11.0085C7.51562 11.165 9.75 13.4339 9.98437 15.6401C10 15.8435 10.1719 16 10.3906 16H10.6094C10.8281 16 11 15.8435 11.0156 15.6245C11.2031 13.1522 13.1875 11.1181 15.6563 10.9929C15.8594 10.9772 16 10.8208 16 10.6174V10.3357C16 10.1323 15.8438 9.97582 15.6563 9.96017C13.1719 9.83499 11.1719 7.78521 11.0156 5.28165C10.9844 5.14083 10.8281 5 10.6406 5Z"
                    fill="#066FDE"></path>
                </svg>{" "}
                <span>Unlock the secrets of your life's path</span>
              </li>
              <li>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.6406 5H10.3281C10.1406 5 9.98437 5.14083 9.98437 5.32859C9.82812 7.53485 7.51563 9.78805 5.3125 9.99146C5.14063 10.0071 5 10.1636 5 10.3357V10.6643C5 10.8521 5.14062 10.9929 5.32812 11.0085C7.51562 11.165 9.75 13.4339 9.98437 15.6401C10 15.8435 10.1719 16 10.3906 16H10.6094C10.8281 16 11 15.8435 11.0156 15.6245C11.2031 13.1522 13.1875 11.1181 15.6563 10.9929C15.8594 10.9772 16 10.8208 16 10.6174V10.3357C16 10.1323 15.8438 9.97582 15.6563 9.96017C13.1719 9.83499 11.1719 7.78521 11.0156 5.28165C10.9844 5.14083 10.8281 5 10.6406 5Z"
                    fill="#066FDE"></path>
                </svg>{" "}
                <span>Discover your hidden potential and embrace personal growth</span>
              </li>
              <li>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.6406 5H10.3281C10.1406 5 9.98437 5.14083 9.98437 5.32859C9.82812 7.53485 7.51563 9.78805 5.3125 9.99146C5.14063 10.0071 5 10.1636 5 10.3357V10.6643C5 10.8521 5.14062 10.9929 5.32812 11.0085C7.51562 11.165 9.75 13.4339 9.98437 15.6401C10 15.8435 10.1719 16 10.3906 16H10.6094C10.8281 16 11 15.8435 11.0156 15.6245C11.2031 13.1522 13.1875 11.1181 15.6563 10.9929C15.8594 10.9772 16 10.8208 16 10.6174V10.3357C16 10.1323 15.8438 9.97582 15.6563 9.96017C13.1719 9.83499 11.1719 7.78521 11.0156 5.28165C10.9844 5.14083 10.8281 5 10.6406 5Z"
                    fill="#066FDE"></path>
                </svg>{" "}
                <span>Take control of your destiny by understanding the power of your hands</span>
              </li>
            </ul>
            <div className="recomommandation">
              <div className="people">
                <img src={person1} />
                <img src={person2} />
                <img src={person3} />
              </div>
              <span>
                Last week <b>hundreds of people</b> got astrology reading
              </span>
            </div>
            <div className="button">
              <button>Try 7-day trial</button>
            </div>
          </div>
        </section>
        <section className="money-back">
          <svg
            width="51"
            height="50"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="25.176" cy="25.0293" r="13.5" fill="#2B7CF6"></circle>
            <path
              d="M25.1699 44.3055C22.2299 44.3055 19.3083 43.6256 16.6745 42.321C13.7835 40.8939 11.2907 38.7379 9.44704 36.098C9.08566 35.5774 9.21429 34.8608 9.73491 34.4994C10.2555 34.138 10.9722 34.2666 11.3335 34.7873C12.9505 37.1148 15.1494 39.0074 17.6913 40.263C20.2332 41.5186 23.069 42.1189 25.8988 41.9964C30.3945 41.8004 34.5473 39.8649 37.5853 36.5451C40.6294 33.2254 42.1913 28.9256 41.9953 24.4238C41.9647 23.7929 42.4608 23.2539 43.0917 23.2294C43.7225 23.2049 44.2615 23.6949 44.286 24.3258C44.5065 29.434 42.7303 34.3279 39.2697 38.0948C35.8152 41.8678 31.0989 44.0666 25.9845 44.2871C25.7212 44.2994 25.4455 44.3055 25.1699 44.3055Z"
              fill="#2B7CF6"></path>
            <path
              d="M7.15017 26.744C6.52542 26.744 6.01704 26.2479 6.00479 25.617C5.97417 24.2573 6.09054 22.8853 6.34779 21.55C7.30942 16.5275 10.1698 12.1788 14.4083 9.30615C18.6407 6.43353 23.7367 5.38615 28.7592 6.34778C31.1785 6.81328 33.457 7.7259 35.5273 9.06115C37.5975 10.3964 39.3677 12.093 40.7887 14.1082C41.1562 14.6288 41.0337 15.3454 40.513 15.7068C39.9924 16.0743 39.2758 15.9518 38.9144 15.4312C37.6649 13.661 36.103 12.1665 34.2839 10.9905C32.4648 9.81453 30.4558 9.01215 28.3304 8.60178C23.9082 7.75653 19.4247 8.6814 15.7007 11.2049C11.9767 13.7284 9.45317 17.5627 8.60179 21.9849C8.37517 23.167 8.27717 24.3737 8.30167 25.5742C8.31392 26.2112 7.81167 26.7318 7.17467 26.744C7.16854 26.744 7.16242 26.744 7.15017 26.744Z"
              fill="#2B7CF6"></path>
            <path
              d="M41.0907 16.5293L35.296 15.7702C34.9097 15.7199 34.6359 15.3298 34.6809 14.8979C34.7259 14.4659 35.0747 14.1555 35.461 14.21L39.8417 14.7804L40.273 10.2342C40.3143 9.8022 40.6593 9.48765 41.0457 9.53379C41.432 9.57992 41.7133 9.96576 41.672 10.3977L41.0907 16.5293Z"
              fill="#2B7CF6"></path>
            <path
              d="M8.37868 40.5293C8.35241 40.5293 8.3299 40.5293 8.30363 40.5251C7.91715 40.479 7.63573 40.0931 7.68076 39.6611L8.26611 33.5293L14.0558 34.2884C14.4423 34.3388 14.7162 34.7288 14.6712 35.1608C14.6262 35.5928 14.2772 35.899 13.8907 35.8486L9.51185 35.2741L9.07659 39.8205C9.03907 40.2273 8.73514 40.5293 8.37868 40.5293Z"
              fill="#2B7CF6"></path>
            <path
              d="M25.144 33.5591C23.1412 33.5591 21.4017 32.6894 20.0909 31.0356C19.0864 29.7677 18.6944 28.457 18.676 28.4019L20.881 27.7465C20.9239 27.8935 22.0448 31.4215 25.3951 31.25C26.7978 31.1765 27.8635 30.6987 28.5679 29.8229C29.0824 29.1859 29.2294 28.5366 29.2478 28.4692L29.26 28.4141C29.2784 28.2916 29.4009 27.4525 28.8374 26.7114C28.2494 25.9396 27.055 25.468 25.3706 25.3394C23.0676 25.1617 21.3833 24.4022 20.3604 23.0915C19.1967 21.6031 19.3436 19.9616 19.3926 19.588C19.4171 19.3001 19.558 18.3385 20.2685 17.3891C20.9852 16.4336 22.4368 15.2882 25.2788 15.2882C27.9615 15.2392 30.3748 16.8011 31.4344 19.2695L29.3151 20.176C28.623 18.5712 27.0489 17.5545 25.3033 17.5851H25.2788C23.7536 17.5851 22.6879 17.9832 22.0999 18.7672C21.7263 19.2695 21.6711 19.7717 21.6711 19.7779L21.665 19.8636L21.6528 19.9126C21.6405 20.0167 21.5425 20.9232 22.1734 21.7134C22.7859 22.479 23.919 22.9322 25.5299 23.0609C27.9493 23.2446 29.6826 24.0225 30.681 25.3822C31.8264 26.9319 31.5508 28.604 31.4895 28.9041C31.4466 29.1185 31.2261 30.123 30.436 31.1581C29.6581 32.1749 28.1698 33.4182 25.4993 33.553C25.3829 33.5591 25.2604 33.5591 25.144 33.5591Z"
              fill="white"></path>
            <path d="M26.4119 13.5293H24.115V35.763H26.4119V13.5293Z" fill="white"></path>
          </svg>
          <span>100% Money-back guarantee</span>
          <p>
            The main goal of the Hint team is to create the best for you. Therefore, we carefully
            designed our product and astrology believe in its quality. If you don’t notice any
            progress after using the app for at least a week, we are ready to make a complete refund
            within <b>14 days.</b>
          </p>
        </section>
        <section className="question">
          <span>What do your hands and fingers say about you?</span>
        </section>
        <section className="what-fingers-say-about-you">
          <div className="left">
            <div className="l">
              <img src={first} />
            </div>
            <div className="r">
              <ul>
                <li>
                  <span className="blue">Love line</span> shows your attitude to love and the
                  quality of love
                </li>
                <li>A long thumb indicates good fortune</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="l">
              <img src={second} />
            </div>
            <div className="r">
              <ul>
                <li>
                  <span className="blue">Head line</span> reflects your intelligence and mentality
                </li>
                <li>A long index finger indicates a natural leader</li>
              </ul>
            </div>
          </div>
          <div className="left">
            <div className="l">
              <img src={third} />
            </div>
            <div className="r">
              <ul>
                <li>
                  <span className="blue">Life line</span> defines the quality of your life and what
                  you will achieve
                </li>
                <li>A short middle finger reveals a free spirit</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="l">
              <img src={fourth} />
            </div>
            <div className="r">
              <ul>
                <li>
                  <span className="blue">Fate line</span> represents your material achievement and
                  career goals
                </li>
                <li>A long ring finger reveals that a person tends to take risk</li>
              </ul>
            </div>
          </div>
          <div className="left">
            <div className="l">
              <img src={fifth} />
            </div>
            <div className="r">
              <ul>
                <li>A short little finger indicates the person’s lack of self-confidence</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="zodiac-compatibility">
          <div className="title">
            <span>Zodiac Compatibility</span>
            <p>
              We use algorithms for big data analytics to produce the most accurate results in
              conjunction with the decoding of these data by professional astrologers.
            </p>
          </div>
          <div className="content">
            <div className="top">
              <div className="left">
                <img src={taurus} />
                <span>Taurus</span>
                <p>21 Apr - 21 May</p>
              </div>
              <div className="right">
                <img src={cancer} />
                <span>Cancer</span>
                <p>22 June - 22 July</p>
              </div>
            </div>
            <div className="bottom">
              <div className="block">
                <span>Love</span>
                <div className="progress-bar">
                  <div className="fill"></div>
                </div>
                <p>85%</p>
              </div>
              <div className="block">
                <span>Marriage</span>
                <div className="progress-bar">
                  <div className="fill"></div>
                </div>
                <p>78%</p>
              </div>
              <div className="block">
                <span>Friendship</span>
                <div className="progress-bar">
                  <div className="fill"></div>
                </div>
                <p>64%</p>
              </div>
              <div className="block">
                <span>Business</span>
                <div className="progress-bar">
                  <div className="fill"></div>
                </div>
                <p>54%</p>
              </div>
            </div>
          </div>
        </section>
        <section className="you">
          <div className="title">
            <span>We will prepare your personalized plan</span>
          </div>
          <div className="blocks">
            <div className="top">
              <img src={you} />
              <div className="text">
                <span>You</span>
                <p>06 Jan 1998</p>
              </div>
            </div>
            <div className="bottom">
              <div className="block">
                <div className="left">
                  <span>Sun Sign</span>
                  <p>Capricorn</p>
                </div>
                <div className="right">
                  <img src={capricorn} />
                </div>
              </div>
              <div className="block">
                <div className="left">
                  <span>Planet</span>
                  <p>Saturn</p>
                </div>
                <div className="right">
                  <img src={saturn} />
                </div>
              </div>
              <div className="block">
                <div className="left">
                  <span>Element</span>
                  <p>Air</p>
                </div>
                <div className="right">
                  <img src={air} />
                </div>
              </div>
              <div className="block">
                <div className="left">
                  <span>Color</span>
                  <p>Blue</p>
                </div>
                <div className="right">
                  <img src={blue} />
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <button>Get Personal Prediction</button>
          </div>
        </section>
        <section className="reviews">
          <div className="title">
            <span>Here are a few stories from Hint users</span>
          </div>
          <div className="comments">
            <div className="comment">
              <div className="top">
                <div className="left">
                  <img src={user} />
                </div>
                <div className="right">
                  <svg
                    className="svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.64062 0.0546875H9.29688C10.2025 0.0555827 10.9365 0.726644 10.9375 1.55469V6.88802C10.9365 7.71606 10.2025 8.38713 9.29688 8.38802H5.51067L1.71904 10.038C1.6514 10.0674 1.57093 10.056 1.51628 10.0092C1.46163 9.9624 1.44374 9.88989 1.47124 9.82617L2.10054 8.38802H1.64062C0.734952 8.38713 0.000979107 7.71606 0 6.88802V1.55469C0.000979107 0.726644 0.734952 0.0555827 1.64062 0.0546875ZM6.44109 3.13941H7.75693C7.95021 3.13935 8.12149 3.25795 8.18124 3.43315C8.241 3.60829 8.17558 3.80024 8.01918 3.90846L6.95471 4.6454C6.9025 4.68145 6.88065 4.74545 6.90054 4.80386L7.30721 5.99666C7.36914 6.17179 7.30329 6.36492 7.14515 6.47196C6.98948 6.58226 6.77639 6.58226 6.62072 6.47196L5.55617 5.73503C5.50404 5.69891 5.43346 5.69891 5.38133 5.73503L4.31678 6.47196C4.16046 6.58026 3.94867 6.58026 3.79235 6.47203C3.63595 6.36374 3.57054 6.17186 3.63029 5.99666L4.03696 4.80399C4.05692 4.74552 4.03507 4.68145 3.98279 4.6454L2.91832 3.90846C2.76192 3.80024 2.6965 3.60829 2.75626 3.43315C2.81601 3.25795 2.98729 3.13935 3.18057 3.13941H4.49641C4.56081 3.13941 4.61788 3.09997 4.63785 3.04164L5.04437 1.84884C5.10398 1.6735 5.27533 1.55469 5.46875 1.55469C5.66217 1.55469 5.83352 1.6735 5.89313 1.84884L6.29965 3.04164C6.31962 3.09997 6.37669 3.13941 6.44109 3.13941Z"></path>
                  </svg>
                  <span>Liz Hoffman</span>
                  <div className="stars">
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <p>
                  Just wow! Palmistry has shown me my future and now I know I need to work hard and
                  not give up! This changed my life!
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="top">
                <div className="left">
                  <img src={user} />
                </div>
                <div className="right">
                  <svg
                    className="svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.64062 0.0546875H9.29688C10.2025 0.0555827 10.9365 0.726644 10.9375 1.55469V6.88802C10.9365 7.71606 10.2025 8.38713 9.29688 8.38802H5.51067L1.71904 10.038C1.6514 10.0674 1.57093 10.056 1.51628 10.0092C1.46163 9.9624 1.44374 9.88989 1.47124 9.82617L2.10054 8.38802H1.64062C0.734952 8.38713 0.000979107 7.71606 0 6.88802V1.55469C0.000979107 0.726644 0.734952 0.0555827 1.64062 0.0546875ZM6.44109 3.13941H7.75693C7.95021 3.13935 8.12149 3.25795 8.18124 3.43315C8.241 3.60829 8.17558 3.80024 8.01918 3.90846L6.95471 4.6454C6.9025 4.68145 6.88065 4.74545 6.90054 4.80386L7.30721 5.99666C7.36914 6.17179 7.30329 6.36492 7.14515 6.47196C6.98948 6.58226 6.77639 6.58226 6.62072 6.47196L5.55617 5.73503C5.50404 5.69891 5.43346 5.69891 5.38133 5.73503L4.31678 6.47196C4.16046 6.58026 3.94867 6.58026 3.79235 6.47203C3.63595 6.36374 3.57054 6.17186 3.63029 5.99666L4.03696 4.80399C4.05692 4.74552 4.03507 4.68145 3.98279 4.6454L2.91832 3.90846C2.76192 3.80024 2.6965 3.60829 2.75626 3.43315C2.81601 3.25795 2.98729 3.13935 3.18057 3.13941H4.49641C4.56081 3.13941 4.61788 3.09997 4.63785 3.04164L5.04437 1.84884C5.10398 1.6735 5.27533 1.55469 5.46875 1.55469C5.66217 1.55469 5.83352 1.6735 5.89313 1.84884L6.29965 3.04164C6.31962 3.09997 6.37669 3.13941 6.44109 3.13941Z"></path>
                  </svg>
                  <span>Marie Michelle Ricci</span>
                  <div className="stars">
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <p>
                  This prediction is so accurate! I never knew my palm can show the time I meet my
                  soul-mate and how many kids I am going to have. This is spectacular!
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="top">
                <div className="left">
                  <img src={user} />
                </div>
                <div className="right">
                  <svg
                    className="svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.64062 0.0546875H9.29688C10.2025 0.0555827 10.9365 0.726644 10.9375 1.55469V6.88802C10.9365 7.71606 10.2025 8.38713 9.29688 8.38802H5.51067L1.71904 10.038C1.6514 10.0674 1.57093 10.056 1.51628 10.0092C1.46163 9.9624 1.44374 9.88989 1.47124 9.82617L2.10054 8.38802H1.64062C0.734952 8.38713 0.000979107 7.71606 0 6.88802V1.55469C0.000979107 0.726644 0.734952 0.0555827 1.64062 0.0546875ZM6.44109 3.13941H7.75693C7.95021 3.13935 8.12149 3.25795 8.18124 3.43315C8.241 3.60829 8.17558 3.80024 8.01918 3.90846L6.95471 4.6454C6.9025 4.68145 6.88065 4.74545 6.90054 4.80386L7.30721 5.99666C7.36914 6.17179 7.30329 6.36492 7.14515 6.47196C6.98948 6.58226 6.77639 6.58226 6.62072 6.47196L5.55617 5.73503C5.50404 5.69891 5.43346 5.69891 5.38133 5.73503L4.31678 6.47196C4.16046 6.58026 3.94867 6.58026 3.79235 6.47203C3.63595 6.36374 3.57054 6.17186 3.63029 5.99666L4.03696 4.80399C4.05692 4.74552 4.03507 4.68145 3.98279 4.6454L2.91832 3.90846C2.76192 3.80024 2.6965 3.60829 2.75626 3.43315C2.81601 3.25795 2.98729 3.13935 3.18057 3.13941H4.49641C4.56081 3.13941 4.61788 3.09997 4.63785 3.04164L5.04437 1.84884C5.10398 1.6735 5.27533 1.55469 5.46875 1.55469C5.66217 1.55469 5.83352 1.6735 5.89313 1.84884L6.29965 3.04164C6.31962 3.09997 6.37669 3.13941 6.44109 3.13941Z"></path>
                  </svg>
                  <span>Shauna Taylor</span>
                  <div className="stars">
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                        fill="#FF9649"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <p>I was pretty shocked at how accurate all the stuff about my husband was.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="insights">
          <div className="title">
            <span>Gain insights from experts</span>
          </div>
          <div className="content">
            <div className="people">
              <img src={person1} />
              <img src={person2} />
              <img src={person3} />
            </div>
            <img src={insights} />
            <p>
              Our astrologers create personalized astrological readings for your growth and
              transformation.
            </p>
          </div>
        </section>
        <footer>
          <section className="top">
            <div className="title">
              <span>As featured in</span>
            </div>
            <img
              className="brands"
              src="https://hint-landing.vercel.app/static/media/Featured.fa6d6e0eda0ac073501d.png"
            />
          </section>
          <section className="bottom">
            <p className="questions">Questions? We’re here to help.</p>
            <div className="links">
              <a href="">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.31413 0.442627C3.63813 0.442627 0.647461 3.43329 0.647461 7.10929V9.87129C0.647461 10.554 1.24546 11.1093 1.98079 11.1093H2.64746C2.82427 11.1093 2.99384 11.0391 3.11887 10.914C3.24389 10.789 3.31413 10.6194 3.31413 10.4426V7.01396C3.31413 6.83715 3.24389 6.66758 3.11887 6.54256C2.99384 6.41753 2.82427 6.34729 2.64746 6.34729H2.04213C2.41279 3.76729 4.63279 1.77596 7.31413 1.77596C9.99546 1.77596 12.2155 3.76729 12.5861 6.34729H11.9808C11.804 6.34729 11.6344 6.41753 11.5094 6.54256C11.3844 6.66758 11.3141 6.83715 11.3141 7.01396V11.1093C11.3141 11.8446 10.7161 12.4426 9.98079 12.4426H8.64746V11.776H5.98079V13.776H9.98079C11.4515 13.776 12.6475 12.58 12.6475 11.1093C13.3828 11.1093 13.9808 10.554 13.9808 9.87129V7.10929C13.9808 3.43329 10.9901 0.442627 7.31413 0.442627Z"
                    fill="#066FDE"></path>
                </svg>
                Customer Support
              </a>
              <a href="">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.53092 9.86011C7.04274 9.86011 5.83203 11.0709 5.83203 12.559C5.83203 14.0472 7.0428 15.2579 8.53092 15.2579C10.0192 15.2579 11.2299 14.0471 11.2299 12.559C11.2299 11.0709 10.0193 9.86011 8.53092 9.86011ZM8.53092 14.2703C7.58735 14.2703 6.81972 13.5026 6.81972 12.559C6.81972 11.6154 7.58735 10.8478 8.53118 10.8478C9.47462 10.8478 10.2422 11.6154 10.2422 12.559C10.2422 13.5026 9.47449 14.2703 8.53092 14.2703Z"
                    fill="#066FDE"></path>
                  <path
                    d="M17.1258 0.109375H11.0411C9.81388 0.109375 8.81553 1.10812 8.81553 2.33582V5.0087H7.52271C7.24991 5.0087 7.02887 5.22974 7.02887 5.50254V6.3644C6.38582 6.51907 5.77766 6.77113 5.21271 7.11708L4.60311 6.50741C4.41024 6.31468 4.09754 6.31455 3.90475 6.50741L2.47918 7.93291C2.38654 8.02555 2.33452 8.15112 2.33452 8.28216C2.33452 8.41312 2.38654 8.53869 2.47912 8.6314L3.08879 9.24107C2.74283 9.80602 2.49084 10.4141 2.33617 11.0572H1.47431C1.20151 11.0572 0.980469 11.2782 0.980469 11.551V13.5671C0.980469 13.8399 1.20151 14.0609 1.47431 14.0609H2.33617C2.49084 14.7039 2.7429 15.312 3.08879 15.877L2.47912 16.4866C2.28626 16.6795 2.28626 16.9922 2.47912 17.1851L3.90468 18.6107C4.09761 18.8035 4.41024 18.8035 4.60311 18.6107L5.21271 18.001C5.7776 18.3469 6.38582 18.5989 7.02887 18.7537V19.6155C7.02887 19.8883 7.24991 20.1094 7.52271 20.1094H9.53878C9.81157 20.1094 10.0326 19.8883 10.0326 19.6155V18.7537C10.6757 18.5989 11.2839 18.3469 11.8487 18.001L12.4584 18.6107C12.6512 18.8035 12.9639 18.8035 13.1569 18.6107L14.5824 17.1851C14.675 17.0925 14.727 16.9668 14.727 16.8359C14.727 16.7049 14.675 16.5793 14.5824 16.4866L13.9728 15.8769C14.3187 15.312 14.5707 14.7038 14.7254 14.0609H15.5872C15.86 14.0609 16.0811 13.8399 16.0811 13.5671V11.551C16.0811 11.2782 15.86 11.0572 15.5872 11.0572H14.7254C14.67 10.8272 14.6007 10.6022 14.5205 10.3816L15.4567 9.70752H17.1259C18.3531 9.70752 19.3515 8.70864 19.3515 7.48088V2.33582C19.3514 1.10812 18.353 0.109375 17.1258 0.109375ZM13.8367 11.635C13.8776 11.8718 14.083 12.0448 14.3233 12.0448H15.0934V13.0732H14.3233C14.0831 13.0732 13.8776 13.2461 13.8367 13.4829C13.7006 14.2706 13.3973 15.0022 12.9356 15.6573C12.7972 15.8536 12.8202 16.1212 12.99 16.291L13.5348 16.8357L12.8076 17.5629L12.2628 17.0182C12.0929 16.8483 11.8255 16.8253 11.6291 16.9638C10.9741 17.4256 10.2425 17.7287 9.45469 17.8649C9.21791 17.9058 9.04493 18.1112 9.04493 18.3516V19.1216H8.01655V18.3516C8.01655 18.1113 7.84358 17.9058 7.60679 17.8649C6.81902 17.7288 6.0874 17.4256 5.43237 16.9638C5.23608 16.8253 4.96862 16.8482 4.7986 17.0182L4.25393 17.5629L3.52673 16.8357L4.07147 16.291C4.24128 16.1212 4.26433 15.8536 4.12592 15.6573C3.66415 15.0022 3.36099 14.2706 3.22482 13.4829C3.18387 13.2461 2.97849 13.0732 2.73816 13.0732H1.96816V12.0448H2.73822C2.97849 12.0448 3.18393 11.8718 3.22489 11.635C3.36099 10.8474 3.66421 10.1158 4.12599 9.46047C4.2644 9.26411 4.24135 8.99665 4.07153 8.82677L3.52679 8.28209L4.25399 7.55495L4.79867 8.0997C4.96868 8.26958 5.23615 8.29256 5.43237 8.15409C6.0876 7.69231 6.81921 7.38915 7.60686 7.25299C7.84364 7.21203 8.01662 7.00666 8.01662 6.76632V5.99632H8.81559V7.48075C8.81559 8.70851 9.81394 9.70739 11.0412 9.70739H11.5379V11.565C11.5379 11.7503 11.6417 11.9201 11.8066 12.0045C11.8776 12.0409 11.9548 12.0588 12.0317 12.0588C12.1334 12.0588 12.2347 12.0274 12.3204 11.9657L13.6822 10.9851C13.7465 11.1971 13.7984 11.4138 13.8367 11.635ZM18.3638 7.48075C18.3638 8.1639 17.8084 8.7197 17.1258 8.7197H15.2974C15.1938 8.7197 15.0929 8.75223 15.0088 8.81281L12.5255 10.6008V9.21354C12.5255 8.94074 12.3044 8.7197 12.0316 8.7197H11.0411C10.3586 8.7197 9.80321 8.1639 9.80321 7.48075V2.33582C9.80321 1.6528 10.3586 1.09706 11.0411 1.09706H17.1258C17.8084 1.09706 18.3638 1.6528 18.3638 2.33582V7.48075Z"
                    fill="#066FDE"></path>
                  <path
                    d="M14.0285 1.73145C12.8906 1.73145 11.9648 2.65724 11.9648 3.79518C11.9648 4.06792 12.1859 4.28903 12.4587 4.28903C12.7315 4.28903 12.9525 4.06792 12.9525 3.79518C12.9525 3.20185 13.4352 2.71913 14.0285 2.71913C14.6219 2.71913 15.1045 3.20185 15.1045 3.79518C15.1045 4.38918 14.3367 5.1493 13.8287 5.6523C13.7772 5.70326 13.7273 5.75271 13.6793 5.80065C13.4865 5.99358 13.4865 6.30621 13.6793 6.49908C13.7758 6.59547 13.9022 6.64367 14.0286 6.64367C14.1549 6.64367 14.2814 6.59547 14.3778 6.49908C14.4246 6.45226 14.4734 6.40393 14.5237 6.35415C15.1857 5.69879 16.0923 4.80111 16.0923 3.79518C16.0922 2.65717 15.1665 1.73145 14.0285 1.73145Z"
                    fill="#066FDE"></path>
                  <path
                    d="M13.8866 7.07178C13.7305 7.07178 13.5777 7.13499 13.4678 7.24561C13.3572 7.35557 13.2939 7.50833 13.2939 7.66439C13.2939 7.82044 13.3572 7.97321 13.4678 8.08383C13.5777 8.19379 13.7305 8.257 13.8866 8.257C14.0426 8.257 14.1953 8.19379 14.306 8.08383C14.416 7.97314 14.4792 7.82044 14.4792 7.66439C14.4792 7.50833 14.416 7.35557 14.306 7.24561C14.1954 7.13499 14.0426 7.07178 13.8866 7.07178Z"
                    fill="#066FDE"></path>
                </svg>
                Help Center
              </a>
            </div>
            <p className="america">
              © 2022, RLabs America Inc DBA Hint <br />
              112 S.French Street, Suite 105, Wilmington, DE 19801, US
            </p>
          </section>
        </footer>
        <section className="get-personal-prediction">
          <span>{formatTime(time)}</span>
          <button>Get Personal Prediction</button>
        </section>
      </div>
    </div>
  );
};

export default Paywall;
