import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const PopularTabs = ({ onTabChange }) => {
  return (
    <>
      <Tabs defaultValue="account" className="px-4 w-[150px] md:w-[300px]">
        <TabsList className="grid w-full grid-cols-2 bg-transparent border text-white ">
          <TabsTrigger
            value="account"
            className="text-[10px] md:text-[14px] md:font-semibold"
            onClick={() => onTabChange("movie")}
          >
            Movies
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="text-[10px] md:text-[14px] md:font-semibold"
            onClick={() => onTabChange("tv")}
          >
            Tv-Shows
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default PopularTabs;
