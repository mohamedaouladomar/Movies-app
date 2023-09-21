import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../componants/Accueil.css";
import Header from "./Header";
import Header2 from '../componants/Header2';


function Gestion() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [ratingFrom, setRatingFrom] = useState("");
  const [ratingTo, setRatingTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");


  useEffect(() => {
    axios.get("http://localhost:3000/moviess").then((res) => {
      setMovies(res.data.reverse());
    });
  }, []);


  const searchMovies = () => {
    let params = {};
    if (keyword) {
      params.Title_like = keyword;
    }
    if (ratingFrom) {
      params.Rating_gte = ratingFrom;
    }
    if (ratingTo) {
      params.Rating_lte = ratingTo;
    }
    if (yearFrom) {
    params.ReleaseDate_gte = yearFrom;
    }
    if (yearTo) {
    params.ReleaseDate_lte = yearTo;
    }
    axios
      .get("http://localhost:3000/moviess", { params })
      .then((res) => {
        setMovies(res.data.reverse());
      });
  };
  

  

  const clearSearch = () => {
    setKeyword("");
    setRatingFrom("");
    setRatingTo("");
    setYearFrom("");
    setYearTo("");
    axios.get("http://localhost:3000/moviess").then((res) => {
      setMovies(res.data.reverse());
    });
  };


  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  function Pagination() {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
       <div className="pagination">
    {pageNumbers.map((number) => (
      <button key={number} onClick={() => setCurrentPage(number)}>
        {number}
      </button>
    ))}
  </div>
    );
  }


  const handleSortChange = (event) => {
    const { value } = event.target;
    let sortedMovies = [...movies];
  
    switch (value) {
      case "title-asc":
        sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
        break;
      case "title-desc":
        sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
        break;
      case "rating-desc":
        sortedMovies.sort((a, b) => b.Rating - a.Rating);
        break;
      case "rating-asc":
        sortedMovies.sort((a, b) => a.Rating - b.Rating);
        break;
      case "ancient":
        sortedMovies.sort((a, b) => new Date(a.ReleaseDate) - new Date(b.ReleaseDate));
        break;
      case "date-now":
        sortedMovies.sort((a, b) => new Date(b.ReleaseDate) - new Date(a.ReleaseDate));
        break;
      default:
        break;
    }
  
    setMovies(sortedMovies);
  };
  
 

  return (
    <div>
      <Header2/>
      <div className="leftdiv">
        <br></br>
        <br></br>
        <label>Search Keyword</label> <br></br>
        <input
          type="text"
          className="inp1"
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <br></br>

        <label>Year From</label> <br></br>
        <input
          type="date"
          className="inp1"
          value={yearFrom}
          onChange={(e) => setYearFrom(e.target.value)}
        />
        <br></br>

        <label>Year To</label> <br></br>
        <input
          type="date"
          className="inp1"
          value={yearTo}
          onChange={(e) => setYearTo(e.target.value)}
        />
        <br></br>


        <label>Rating From</label> <br></br>
        <input type="number" className="inp1" value={ratingFrom} onChange={(e) => setRatingFrom(e.target.value)} />
        <br></br>

        <label>Rating To</label> <br></br>
        <input type="number" className="inp1" value={ratingTo} onChange={(e) => setRatingTo(e.target.value)} />
        <br></br>
        <br />

       

        <input
          type="submit"
          value="Search"
          className="inpp2"
          onClick={searchMovies}
        />
        <br></br>
        <br />
        <input
          type="submit"
          value="Clear"
          className="inpp3"
          onClick={clearSearch}
        />
      </div>
      <div className="select-container">
        <select onChange={handleSortChange}>
          <option value="">Trier par</option>
          <option value="title-asc">A to Z</option>
          <option value="title-desc">Z to A</option>
          <option value="rating-desc">Top Rating</option>
          <option value="rating-asc">Lowest Rating</option>
          <option value="ancient">Ancient date</option>
          <option value="date-now">Date now</option>

        </select>
      </div>
     
      <div className="divmov">
        {currentMovies.length === 0 ? (
          <div>
            <label className="notdata2">This Movies Not available</label>
            <img
              className="notdata"
              src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=6c09b952v9nq1qomdxkg303yu6xzrojj21e2zpm2uol4p98k&rid=giphy.gif&ct=g"
            />
          </div>
        ) : (
          currentMovies.map((data, index) => (
          
            <div key={index} className="divmov2">

              <Link className="lnk" to={`viewmovies/${data.id}`}>
                
                <img src={data.Image} />
                <div
                  className={`rating ${
                    data.Rating > 7 ? "green" : data.Rating > 5 ? "yellow" : "red"
                  }`}
                >
                  <span>{data.Rating}</span>
                </div>
                <div className="title">{data.Title}</div>
                <div className="date">{data.ReleaseDate}</div>
              </Link>
            </div>
          ))
        )}
          <Pagination />
      </div>
    
    </div>
  );
}

export default Gestion;
