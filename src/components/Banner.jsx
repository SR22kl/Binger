import useFetch from "@/hook/useFetch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import Img from "./LazyImag";
import { Button } from "./ui/button";

const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  // console.log(url)

  const searchqueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const { data, loading } = useFetch("/movie/upcoming");
  // console.log(data);

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <>
      <div className="flex w-full h-[230px] bg-slate-900 items-center relative md:h-[700px]">
        <div className="w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden">
          {!loading && (
            <Img
              className="w-full h-full object-cover object-center"
              src={background || ""}
              alt="backdropImg"
            />
          )}
        </div>

        <div className="w-full h-[250px] bg-gradient-to-b from-transparent to-gray-800 absolute bottom-0 left-0"></div>
        <ContentWrapper>
          <div className="flex flex-col  items-center text-center relative max-w-[800px] mx-auto text-white opacity-80">
            <span className="text-2xl mb-2.5 font-bold md:mb-0 md:text-8xl ">
              Welcome!
            </span>
            <span className="text-[14px] font-semibold mb-3.5 md:text-[26px] md:mb-8">
              Millions of movies, TV shows and people to discover. Explore now!
            </span>
            <div className="flex items-center w-full justify-center">
              <input
                className=" h-[30px] px-8 outline-0 border-0 rounded-l-[30px] md:h-[60px] md:text-[20px] md:px-[30px] text-black"
                style={{ width: "calc(100% - 100px)" }}
                type="text"
                placeholder="Search..."
                onKeyUp={searchqueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
               onClick={() => navigate(`/search/${query}`)}
                className="w-[100px] h-[30px] bg-gradient-to-b from-transparent to-cyan-800 outline-0 border-0 rounded-r-[30px] rounded-l-[0px] text-[16px] cursor-pointer md:h-[60px] md:w-[150px] md:text-[20px]"
              >
                Search
              </Button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Banner;
