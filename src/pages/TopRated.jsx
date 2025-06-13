import Carounsel from "@/components/Carounsel";
import PopularTabs from "@/components/PopularTab";
import useFetch from "@/hook/useFetch";
import { useState } from "react";

const TopRated = () => {
  const [endpoint, setendPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  // console.log(data);

  const onTabChange = (tab) => {
    setendPoint(tab) === "Movies" ? "movie" : "tv";
  };

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center relative mt-4">
        <div className="flex relative w-full justify-between items-center mb-4 pl-4 md:pl-8">
          <h1 className=" text-[18px] md:text-3xl text-white">
            Top-Rated!
          </h1>
          <PopularTabs onTabChange={onTabChange} />
        </div>
        <div className="cursor-pointer">
          <Carounsel
            data={data?.results}
            loading={loading}
            endpoint={endpoint}
          />
        </div>
      </div>
    </>
  );
};

export default TopRated;
