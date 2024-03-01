import React, { useState } from "react";
import { globalAPI } from "../API_handler/globalAPI";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await globalAPI.searchByName(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className="formbanh" onSubmit={handleSubmit}>
      <div data-aos="fade-down" data-aos-duration="500" className="search-bar">
        <input
          type="text"
          placeholder="Search for a GPU name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type="submit">
          <span className="icon-search"></span>
        </button>
      </div>

      {loading && (
          <div className="center-page">
            <span className="spinner"></span>
          </div>
        )}

      {searchResults.length > 0 && (
        <div className="awikwok123">
          {searchResults.map((result) => (
            <div className="whole1">
              <div className="card" id="pagecard">
                <img className="img" src={result.image} alt={result.nama} />
              </div>
              <section className="section">
                <Link className="kard" to={`/${result.source}/${result.id}`}>
                  <h3 className="strong">
                    <strong>{result.nama}</strong>
                  </h3>
                  <p>Core Clock Speed: {result.bf}</p>
                  <p>Vram: {result.vr}</p>
                  <p>Bus Width: {result.bw}</p>
                </Link>
              </section>
            </div>
          ))}

          
        </div>
      )}
      
    </form>
  );
};

export default Search;
