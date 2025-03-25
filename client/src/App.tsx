import { TrendingDown } from "lucide-react";
import { UrlForm } from "./components/UrlForm";

function App() {
  return (
    <div className="vw-100 vh-100 bg-black text-white d-flex flex-column justify-content-center">
      <div className="bg-dark container-md h-auto w-75 rounded-3 d-flex flex-column gap-4 py-5">
        <div>
          <div className="container d-flex w-100 justify-content-center align-items-center gap-5 text-center">
            <TrendingDown />
            <h1 className="text-center fw-bold">URL Shortner</h1>
            <TrendingDown />
          </div>

          <div className="d-flex w-100 justify-content-center align-items-center text-center">
            <p>
              URL shortener allows to create a shortened link making it easy to
              share
            </p>
          </div>
        </div>

        <UrlForm />
      </div>
    </div>
  );
}

export default App;
