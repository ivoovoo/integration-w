import { useLocation } from "react-router-dom";
import { AppRouter } from "./router";
import "./styles/index.css";
import { useEffect } from "react";

function App() {
  
  const { pathname } = useLocation();
  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app dark">
      <AppRouter />
    </div>
  );
}

export default App;
