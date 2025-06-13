import { AlignJustify, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/binger.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "./ui/button";

const Navbar = ({ className }) => {
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [mobileview, setMobileView] = useState(true);
  const [query, setQuery] = useState("");

  const navigateHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
  };

  const searchqueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const toggleMenu = () => {
    setMobileView(!mobileview);
  };

  return (
    <>
      <div className={`${className || ""}`}>
        <div className="bg-slate-800 w-full h-full">
          <div className=" flex py-2 px-4 justify-between cursor-pointer ">
            <div
              className="w-10 md:w-12 max-h-12 mt-[2px]"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt=""
                className="hover:scale-125 transition-transform duration-300"
              />
            </div>
            <nav className="flex justify-center items-center pr-2">
              <div className="hidden overflow-hidden pr-2 lg:flex md:flex">
                <ul className="flex gap-2 mt-3 text-white">
                  <li
                    className="flex w-20 justify-center hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={() => navigateHandler("tv")}
                  >
                    <a href=""> TV-Show</a>
                  </li>
                  <li
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={() => navigateHandler("movie")}
                  >
                    <a href=""> Movies</a>
                  </li>
                  <li></li>
                  <div className="-mt-2">
                    <input
                      type="text"
                      className=" h-10 rounded-md pl-4 input input-border-4 bg-transparent border placeholder-gray-400 mb-1 "
                      placeholder="Search..."
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyUp={searchqueryHandler}
                    />
                    <Button
                      className="bg-blue-400 h-10 rounded-r-md px-4 absolute right-10 border border-l-blue-400 w-12 hover:bg-blue-500"
                      onClick={() => navigate(`/search/${query}`)}
                    >
                      <Search className="relative right-0 text-black" />
                    </Button>
                  </div>
                </ul>
              </div>
              <div className="px-4 text-white hover:opacity-80 lg:hidden md:hidden">
                {/* <Search className="relative right-1" /> */}
              </div>
              <div className=" lg:hidden md:hidden px-2 md:px-3.5 border rounded-md h-full justify-center items-center bg-blue-400 hover:opacity-80">
                <AlignJustify
                  className="relative top-2 md:top-2.5"
                  onClick={() => toggleMenu(setMobileView)}
                />
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`w-full bg-black border-t-2 border-t-gray-500  overflow-hidden transition-transform duration-300 ease-in-out ${
            mobileview ? "hidden" : "flex"
          }`}
        >
          <div className="flex flex-col justify-center items-center w-full md:hidden lg:hidden">
            <div className="w-full flex justify-center items-center px-14 mt-3">
              <input
                type="text"
                className=" h-10 rounded-md pl-4 input input-border-4 bg-transparent border placeholder-gray-400 relative w-full text-white"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchqueryHandler}
              />
              <Button
                className="bg-blue-400 text-black h-10 rounded-r-md px-3 -ml-12  border border-l-blue-400 w-12 cursor-pointer z-1 hover:bg-blue-500"
                onClick={() => navigate(`/search/${query}`)}
              >
                <Search className="relative right-0 cursor-pointer" />
              </Button>
            </div>
            <div className="flex  text-white w-full my-2 px-14 ">
              <Accordion
                type="single"
                collapsible
                className="w-full px-4 border rounded-md "
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">Index</AccordionTrigger>
                  <AccordionContent>
                    <ul className="cursor-pointer px-4">
                      <li
                        className="mb-2 hover:opacity-80"
                        onClick={() => navigateHandler("movie")}
                      >
                        <a href=""></a>Movies
                      </li>
                      <li
                        className="hover:opacity-80"
                        onClick={() => navigateHandler("tv")}
                      >
                        <a href=""></a>TV-Shows
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
