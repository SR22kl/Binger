import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Home = () => {
  return (
    <>
      <div>
        <Navbar className={"fixed w-full z-1 opacity-70"} />
        <Banner />
        <Trending />
        <Popular/>
        <TopRated/>
      </div>
    </>
  );
};

export default Home;
