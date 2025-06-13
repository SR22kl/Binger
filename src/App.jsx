import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Serach from "./pages/Serach";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useEffect } from "react";
import Footer from "./pages/Footer";
import MediaPlayer from "./pages/MediaPlayer";
import MediaPlayerTv from "./pages/MediaPlayerTv";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fectchApiConfig();
    genresCall();
  }, []);

  const fectchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"];
    let allGenres = {};

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details/:mediaType/:id" exact element={<Details />} />
          <Route path="/search/:query" exact element={<Serach />} />
          <Route path="/explore/:mediaType" exact element={<Explore />} />
          <Route path="/player/movie/:playerId" exact element={<MediaPlayer />} />
          <Route path="/player/tv/:playerId" exact element={<MediaPlayerTv />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
