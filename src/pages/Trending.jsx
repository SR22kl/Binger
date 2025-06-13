import Carounsel from "@/components/Carounsel";
import SwitchTabs from "@/components/SwitchTabs";
import useFetch from "@/hook/useFetch";
import { useState } from "react";

const Trending = () => {
  const [endpoint, setendPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  // console.log(data);

  const onTabChange = (tab) => {
    setendPoint(tab) === "Day" ? "day" : "week";
  };

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center relative mt-4">
        <div className="flex relative w-full justify-between items-center mb-4 pl-4 md:pl-8">
          <h1 className=" text-[18px] md:text-3xl text-white">Trending Now!</h1>
          <SwitchTabs onTabChange={onTabChange} />
        </div>
        <div className="cursor-pointer">
          <Carounsel data={data?.results} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Trending;
