import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data, className }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <>
      <div className={`${className || ""}`}>
        {data?.map((g) => {
          if (!genres[g]?.name) return null; 

          // The key should be on the outermost element returned by the map callback
          return (
            <React.Fragment key={g}> {/* Use g as the key since it's the genre ID */}
              <div
                className="bg-blue-900 px-[6px] py-[2px] rounded-md"
              >
                {genres[g]?.name}{" "}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Genres;