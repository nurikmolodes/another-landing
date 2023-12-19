import { useEffect, useState } from "react";
import "./Place.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Place = () => {
  const [place, setPlace] = useState("");
  const isButtonDisabled = place === "";
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = () => {
    localStorage.setItem("place", place);
    navigate("/email");
  };

  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    const place = localStorage.getItem("place");
    if (place) {
      setPlace(place);
    }
    window.scrollTo(0, 0);
  }, []);

  const [cities, setCities] = useState([]);
  console.log(cities);

  const searchCity = async (K) => {
    setPlace(K);
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "d8dfbebbee14478cd5328086951a7d38b3aaec9d";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
    };

    try {
      const place = await axios.post(
        url,
        {
          query: K,
          locations: [{ country: "*" }],
          language: "en",
        },
        options,
      );
      setCities(place.data.suggestions);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="name">
      <div className="title">
        <span>Where were you born?</span>
      </div>
      <div className="description">
        <p>Just type your place of birth.</p>
      </div>
      <section>
        <div className="input">
          <span>Place</span>
          <input
            value={place}
            type="text"
            placeholder="Type location..."
            onChange={(e) => searchCity(e.target.value)}
          />
        </div>
      </section>
      <div className={`place__popup ${cities.length ? "place__popup_active" : ""}`}>
        {cities.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setPlace(item.value);
                setCities([]);
              }}
              className={"place__popup-item"}>
              {item?.value}
            </div>
          );
        })}
      </div>

      <button
        className={isButtonDisabled && "disabled"}
        disabled={isButtonDisabled}
        onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default Place;
