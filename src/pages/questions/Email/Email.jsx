/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Email.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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
    fetchCompability();
  };
  const [data, setData] = useState(null);
  const fetchCompability = async () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const gender = localStorage.getItem("gender");
    const dateOfBirth = localStorage.getItem("birthday");
    const date = JSON.parse(dateOfBirth);
    if (email) {
      const body = {
        name: name,
        email: email,
        gender: gender,
        dateOfBirth: `${date?.day}-${date?.month}-${date.year}`,
        lat: "-12.000",
        lon: "22.0",
      };

      try {
        const data = await axios.post(" https://api.astropulse.app/api/users/registration", body, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        setData("success");
        setTimeout(() => {
          window.location.replace("https://astropulse.app");
        }, 3000);
        console.log(data);
      } catch (e) {
        setData("error");
        console.error(e);
        console.log(e);
        setTimeout(() => {
          window.location.replace("https://astropulse.app");
        }, 3000);
      }
    }
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            color: `${data === "success" ? "green" : "red"}`,
          }}>
          <span>
            {data === "success"
              ? "Password has been sent to your email"
              : data === "error"
              ? "User already exists"
              : ""}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Email;
