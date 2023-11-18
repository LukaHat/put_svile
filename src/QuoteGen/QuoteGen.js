import React, { useEffect, useState } from "react";
import axios from "axios";

export const QuoteGen = () => {
  const [quote, setQuote] = useState(
    "The map of the world is drawn by travelers and nomads. Built into it are steps, nights and days, stations and encounters."
  );

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get("https://put-svile-backend.onrender.com/api/v1/quotes/single-quote")
      .then((response) => {
        const singleFact = response.data.singleFact[0];
        if (singleFact && singleFact.lang) {
          // Display the English version of the quote (change index as needed)
          setQuote(singleFact.lang[1]);
        } else {
          setQuote(
            "The map of the world is drawn by travelers and nomads. Built into it are steps, nights and days, stations and encounters."
          );
        }
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []); // The empty dependency array ensures that the effect runs only once, equivalent to componentDidMount

  return (
    <>
      <h1>{quote}</h1>
    </>
  );
};
