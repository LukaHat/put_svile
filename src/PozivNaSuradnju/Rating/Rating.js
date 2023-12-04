import React, { useState, useEffect } from "react";
import { Typography, Rating } from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const Ratings = (props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(
    localStorage.getItem("isSubmitted") === "true"
  );
  const [citation, setCitation] = useState("");
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [language, setLanguage] = useState(2);

  const citationLink =
    "https://put-svile-backend.onrender.com/api/v1/fortunes/citation";

  const { t } = useTranslation();

  useEffect(() => {
    if (isSubmitted) {
      localStorage.setItem("isSubmitted", "true");
    }
  }, [isSubmitted]);

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

  const handleClick = async () => {
    try {
      const response = await axios.get(citationLink);
      setCitation(response.data.translated[language]);
      setIsCookieModalOpen(true);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSubmit = () => {
    const postData = {
      rating: rating,
      comment: comment,
    };

    if (!postData.rating || !postData.comment)
      return console.log("Cannot submit empty review.");
    axios
      .post("https://put-svile-backend.onrender.com/api/v1/reviews", postData)
      .then((response) => {
        console.log("Review submitted successfully:", response.data);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="submitted">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo/kolacic-srece.png"}
            alt="fortune cookie"
            onClick={handleClick}
          />
          <div
            className={
              isCookieModalOpen ? "cookie modal" : "cookie-modal-closed"
            }
          >
            <h2>{citation}</h2>
            <button
              className="close-button"
              onClick={() => setIsCookieModalOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      ) : (
        <form className="rating-form">
          <Typography component="legend" className="legenda">
            <h2>{t("rating-title")}</h2>
          </Typography>
          <div>
            <Rating
              size="large"
              className="ocjena"
              name="simple-controlled"
              value={rating}
              onChange={(event, newRating) => {
                setRating(newRating);
              }}
            />
            <div className="comment-section">
              <label htmlFor="komentar">{t("rating-comment-title")}</label>
              <input
                type="text"
                id="komentar"
                onChange={(e) => setComment(e.target.value)}
                placeholder={t("comment-placeholder")}
              />
            </div>
          </div>
          <input
            type="button"
            value={t("send")}
            onClick={handleSubmit}
            placeholder="Komentar unesite ovdje"
            className="send-button"
          />
        </form>
      )}
    </div>
  );
};
