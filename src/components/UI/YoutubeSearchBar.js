import { useState } from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const YoutubeSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    let query = searchTerm?.split("?");
    let searchValue = "";

    if (query.length > 1) {
      const queryParams = new URLSearchParams(query[1]);
      searchValue = queryParams.get("v");
    }

    if (!searchValue) {
      alert("Please enter correct video URL");
      return;
    }

    navigate(`/results?videoId=${searchValue}`);
  };

  return (
    <form onSubmit={formSubmissionHandler} className="a">
      <div className="search-container">
        <FaYoutube className="youtube-icon" style={{ color: "white" }} />
        <input
          required
          type="url"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter youtube video link..."
        />
      </div>
      <button type="submit">
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  );
};

export default YoutubeSearchBar;
