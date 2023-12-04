import React, { useEffect, useState } from "react";
import axios from "axios";

export const QuoteGen = (props) => {
  const [isPoloModalOpen, setIsPoloModalOpen] = useState(false);
  const [isKhanModalOpen, setIsKhanModalOpen] = useState(false);

  const [language, setLanguage] = useState(2);

  const [poloFact, setPoloFact] = useState("");
  const [khanFact, setKhanFact] = useState("");

  useEffect(() => {
    switch (props.language) {
      case "en":
        setLanguage(0);
        break;
      case "chi":
        setLanguage(1);
        break;
      case "cro":
      default:
        setLanguage(2);
        break;
    }
  }, [props.language]);

  const quoteLink =
    "https://put-svile-backend.onrender.com/api/v1/quotes/single-quote";
  const getPoloQuote = async () => {
    try {
      const response = await axios.get(`${quoteLink}/marco-polo`);
      setPoloFact(response.data.translated[language]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const getKhanQuote = async () => {
    try {
      const response = await axios.get(`${quoteLink}/kublai-khan`);
      setKhanFact(response.data.translated[language]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const handlePoloClick = () => {
    getPoloQuote();
    setTimeout(() => {
      setIsPoloModalOpen(true);
    }, 400);
  };

  const handleKhanClick = () => {
    getKhanQuote();
    setTimeout(() => {
      setIsKhanModalOpen(true);
    }, 400);
  };

  return (
    <>
      <section className="quote-boxes">
        <img
          className="quote-img"
          src={`${process.env.PUBLIC_URL + "/assets/krimg/polo.png"}`}
          alt="Marko Polo"
          onClick={handlePoloClick}
        ></img>
        <img
          className="quote-img"
          src={`${process.env.PUBLIC_URL + "/assets/krimg/kan.png"}`}
          alt="Kublaj Khan"
          onClick={handleKhanClick}
        ></img>
      </section>

      <div className={isPoloModalOpen ? "modal polo" : "modal-closed"}>
        <h2>{poloFact}</h2>
        <button
          className="close-button"
          onClick={() => setIsPoloModalOpen(false)}
        >
          X
        </button>
      </div>

      <div className={isKhanModalOpen ? "modal khan" : "modal-closed"}>
        <h2>{khanFact}</h2>
        <button
          className="close-button"
          onClick={() => setIsKhanModalOpen(false)}
        >
          X
        </button>
      </div>
    </>
  );
};
