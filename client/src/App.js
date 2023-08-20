import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Selection1 from "./pages/Selection1";
import Selection2 from "./pages/Selection2";
import Selection3 from "./pages/Selection3";
import YouCanGrow from "./pages/YouCanGrow";
import Result from "./pages/Result";
import Recipes from "./pages/Recipes";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/selection1":
        title = "";
        metaDescription = "";
        break;
      case "/selection2":
        title = "";
        metaDescription = "";
        break;
      case "/selection3":
        title = "";
        metaDescription = "";
        break;
      case "/you-can-grow":
        title = "";
        metaDescription = "";
        break;
      case "/result":
        title = "";
        metaDescription = "";
        break;
      case "/recipes":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/selection1" element={<Selection1 />} />
      <Route path="/selection2" element={<Selection2 />} />
      <Route path="/selection3" element={<Selection3 />} />
      <Route path="/you-can-grow" element={<YouCanGrow />} />
      <Route path="/result" element={<Result />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
}
export default App;
