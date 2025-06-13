import Carounsel from "@/components/Carounsel";
import useFetch from "@/hook/useFetch";
import React from "react";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title =
    mediaType === "tv" ? "More Tv-Shows Like This:" : "More Movies Like This:";
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center relative mt-4">
        <div className="flex relative w-full justify-between items-center mb-4 pl-4 md:pl-8">
          <h1 className="font-mono text-[18px] md:text-3xl text-white">{title}</h1>
        </div>
        <div>
          <Carounsel data={data?.results} loading={loading} endpoint={mediaType} />
        </div>
      </div>
    </>
  );
};

export default Similar;
