import React, { useState } from "react";
import { Typography, Rating } from "@mui/material";
import axios from "axios";

export const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Prepare data to be sent in the POST request
    const postData = {
      rating: rating,
      comment: comment,
    };

    // Make a POST request using Axios
    axios
      .post("https://put-svile-backend.onrender.com/api/v1/reviews", postData)
      .then((response) => {
        console.log("Review submitted successfully:", response.data);
        // You can add additional logic here based on the response if needed
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        // Handle error accordingly
      });
  };

  return (
    <div>
      <form>
        <Typography component="legend" className="legenda">
          <h2>Koliko vam se svidjela ova stranica?</h2>
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
          <label htmlFor="komentar">Imaš li kakav komentar?</label>
          <input
            type="text"
            id="komentar"
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="button" value="Pošalji" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};
