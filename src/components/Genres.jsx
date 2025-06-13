import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data, className }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <>
      <div className={`${className || ""} flex flex-wrap gap-x-2 gap-y-1`}> {/* Added flex and gaps for better display */}
        {data?.map((g) => {
          if (!genres[g]?.name) return null; // Changed 'return;' to 'return null;' for best practice
          return (
            // REMOVE THE FRAGMENT AROUND THE DIV
            // AND PLACE THE KEY DIRECTLY ON THE DIV
            <div
              key={g} // <-- PLACE THE UNIQUE KEY PROP HERE, using the genre ID 'g'
              className="bg-blue-900 text-white text-xs px-[6px] py-[2px] rounded-md" // Added text-white and text-xs for better readability
            >
              {genres[g]?.name}{" "}
            </div>
            // REMOVED THE CLOSING FRAGMENT TAG </>
          );
        })}
      </div>
    </>
  );
};

export default Genres;