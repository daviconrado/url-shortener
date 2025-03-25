import { TrendingDown } from "lucide-react";
import { UrlForm } from "./components/UrlForm";

function App() {
  return (
    <div className="vw-100 vh-100 bg-black text-white d-flex flex-column justify-content-center">
      <div className="bg-dark container-md h-50 w-75 rounded-3 d-flex flex-column gap-5">
        <h1 className="text-center fw-bold font-monospace mt-5">
          URL Shortner
          <TrendingDown />
        </h1>

        <UrlForm />
      </div>
    </div>
  );
}

export default App;
