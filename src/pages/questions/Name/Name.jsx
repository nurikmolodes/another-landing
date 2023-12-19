import { useEffect, useState } from "react";
import "./Name.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Name = () => {
  const [name, setName] = useState("");
  const isButtonDisabled = name === "";
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = () => {
    localStorage.setItem("name", name);
    navigate("/gender");
  };

  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    const name = localStorage.getItem("name");
    if (name) {
      setName(name);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="name">
      <div className="title">
        <span>What’s your name?</span>
      </div>
      <div className="description">
        <p>Just type your name.</p>
      </div>
      <section>
        <div className="input">
          <span>Name</span>
          <input
            value={name}
            type="text"
            placeholder="Type name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </section>
      <button
        className={isButtonDisabled && "disabled"}
        disabled={isButtonDisabled}
        onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default Name;
