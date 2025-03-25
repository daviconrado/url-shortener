import { ArrowRight } from "lucide-react";
import { useState } from "react";

function UrlForm() {
  const [url, setUrl] = useState("");
  return (
    <div className="container-md gap-3 d-flex flex-column">
      <input
        type="text"
        placeholder="Input URL"
        className="form-control text-center"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />

      <button
        type="submit"
        className="btn btn-primary w-25 d-flex justify-content-between p-3"
      >
        Submit
        <ArrowRight />
      </button>
    </div>
  );
}

export { UrlForm };
