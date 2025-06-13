import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RatingCircle = ({ rating, className }) => {
  return (
    <>
      <div className={`${className || ""}`}>
        <CircularProgressbar
          className="text-[30px]"
          value={rating}
          maxValue={10}
          text={rating}
          styles={buildStyles({
            pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          })}
        />
      </div>
    </>
  );
};

export default RatingCircle;

// className={`${className || ""}`}
