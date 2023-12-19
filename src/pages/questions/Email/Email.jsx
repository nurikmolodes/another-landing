/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Email.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Email = () => {
  const matchEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [email, setEmail] = useState("");
  const isActive = email.match(matchEmail);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("currentPage", location.pathname);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    navigate("/email");
  };

  return (
    <div className="email">
      <div className="title">
        <span>Enter your email to get your advanced Palmistry reading with Hint</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <p className="first">We don’t share any personal information.</p>
        <p className="second">
          By clicking "Continue" below you agree to Hint’s <u>EULA</u> and <u>Privacy Policy</u>.
        </p>
        <button
          className={isActive && "active"}
          disabled={isActive === null ? true : false}
          type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Email;
