import { ArrowRight } from "lucide-react";
import { useState } from "react";

function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(""); // Adicione estado para erros

  const handleShortenUrl = async (e: any) => {
    e?.preventDefault();
    if (!url.trim()) {
      setError("Please insert an URL");
      return;
    }

    setError("");
    setShortUrl(null);

    try {
      const response = await fetch("http://localhost:3333/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Request error");

      setShortUrl(data.shortUrl);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="container-md gap-3 d-flex flex-column">
      <div className="d-flex justify-content-center">
        <form className="input-group w-75" onSubmit={handleShortenUrl}>
          <input
            type="url"
            placeholder="Enter link here"
            className="form-control w-75 p-3"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="btn btn-primary d-flex gap-2 align-items-center"
            type="submit"
          >
            Shorten URL
            <ArrowRight />
          </button>
        </form>
      </div>

      {error && <div className="text-danger text-center">{error}</div>}

      {shortUrl && (
        <div className="text-center mt-3 d-flex justify-content-center">
          <div className="d-flex flex-column bg-black bg-opacity-50 rounded-3 p-3 px-lg-5">
            <p>URL shortened:</p>
            <a
              href={"http://localhost:3333/api/" + shortUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"http://localhost:3333/api/" + shortUrl}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export { UrlForm };
