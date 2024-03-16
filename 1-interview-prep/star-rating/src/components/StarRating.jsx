/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles.css";

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    // console.log(value);
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    // console.log(value);
    setHover(value);
  };

  const handleMouseLeave = () => {
    // console.log(value);
    setHover(rating);
  };

  return (
    <div className="StarRating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <span
            className={index <= (hover || rating) ? "on" : "off"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
