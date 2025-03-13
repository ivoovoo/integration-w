import { AppRouter } from "./router";
import "./styles/index.css";

function App() {
  document.addEventListener("scroll", function () {
    if (window.scrollY < 0) {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div className="app dark">
      <AppRouter />
    </div>
  );
}

export default App;
