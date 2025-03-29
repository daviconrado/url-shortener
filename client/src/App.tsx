import { UrlForm } from "./components/UrlForm";

function App() {
  return (
    <div className="vw-100 vh-100 bg-dark text-white d-flex flex-column justify-content-center">
      <div className="container-md bg-black bg-opacity-50 h-auto w-75 rounded-5 d-flex flex-column gap-4 py-5">
        <div>
          <div className="container d-flex w-100 justify-content-center align-items-center gap-5 text-center">
            <h1 className="text-center fw-bold poppins-bold">
              URL Shortener 🤏
            </h1>
          </div>

          <div className="d-flex w-100 justify-content-center align-items-center text-center">
            <p className="poppins-light">
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
