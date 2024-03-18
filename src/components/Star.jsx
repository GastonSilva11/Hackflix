import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const Star = ({ setRating }) => {
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <Rating onClick={handleRating} />
    </div>
  );
};
export default Star;
