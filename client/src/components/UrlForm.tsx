import { ArrowRight } from "lucide-react";
import { useState } from "react";

function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const originalUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const handleShortenUrl = async (e: any) => {
    e?.preventDefault();
    if (!url.trim()) {
      setError("Please insert an URL");
      return;
    }

    setError("");
    setShortUrl(null);
    setIsLoading(true);

    try {
      const response = await fetch(originalUrl + "/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Request error");

      setShortUrl(data.shortUrl);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-lg gap-3 d-flex flex-column align-items-center">
      <div className="col-12 col-md-10 col-lg-8 w-75">
        <form className="input-group" onSubmit={handleShortenUrl}>
          <input
            type="url"
            placeholder="Paste your looong link"
            className="form-control p-3 poppins-light"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="btn btn-purple d-flex gap-2 align-items-center poppins-light"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="d-none d-md-inline-block ms-1">
                  Loading...
                </span>
              </>
            ) : (
              <>
                <span className="d-none d-md-inline-block ms-1">
                  Shorten URL
                </span>
                <ArrowRight />
              </>
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="rounded-3 p-3 text-danger w-75 text-center bg-danger bg-opacity-25 d-flex justify-content-center mt-3">
          {error}
        </div>
      )}

      {shortUrl && (
        <div className="text-center mt-3 d-flex justify-content-center">
          <div className="d-flex flex-column bg-purple rounded-3 p-3 px-lg-5">
            <span>
              URL shortened:
              <a
                href={originalUrl + "/api/" + shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {originalUrl + "/api/" + shortUrl}
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export { UrlForm };
