import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data, className }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <>
      <div className={`${className || ""}`}>
        {data?.map((g) => {
          if (!genres[g]?.name) return null;

          return (
            <React.Fragment key={g}>
              <div className="bg-blue-900 px-[6px] py-[2px] rounded-md">
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
