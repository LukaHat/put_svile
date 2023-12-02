import React, { useState } from "react";
import { Typography, Rating } from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { t } = useTranslation();

  const handleSubmit = () => {
    // Prepare data to be sent in the POST request
    const postData = {
      rating: rating,
      comment: comment,
    };

    // Make a POST request using Axios
    if (!postData.rating || !postData.comment)
      return console.log("Cannot submit empty review.");
    axios
      .post("https://put-svile-backend.onrender.com/api/v1/reviews", postData)
      .then((response) => {
        console.log("Review submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        // Handle error accordingly
      });
  };

  return (
    <div>
      <form className="rating-form">
        <Typography component="legend" className="legenda">
          <h2>{t("rating-title")}</h2>
        </Typography>
        <div className="">
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
    </div>
  );
};
