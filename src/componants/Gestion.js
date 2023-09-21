import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../componants/Gestion.css";

function Gestion() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

 
  const loadMovies = () => {
    axios.get("http://localhost:3000/moviess").then((res) => {
      setMovies(res.data.reverse());
    });
  };

  useEffect(() => {
    loadMovies();
  }, []);

 
  function handleDelete(id) {
    axios.delete(`http://localhost:3000/moviess/${id}`).then(loadMovies);
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePrevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="divparent">
      <div className="">
        <Link
          className="butt1 btn btn-outline-primary btn-lg btn-block"
          style={{ width: "1230px", height: "60px" }}
          to="/Testmovies"
        >
          ADD Movies
        </Link>
        <br />
        <br />
        <table className="table table-striped" style={{ width: "" }}>
          <thead>
            <tr>
              <th className="text-white" style={{ padding: "15px" }}>
                Title
              </th>

              <th className="text-white" style={{ padding: "15px" }} scope="col">
                Duration
              </th>
              <th className="text-white" style={{ padding: "15px" }} scope="col">
                Country
              </th>
              <th className="text-white" style={{ padding: "15px" }} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((data, index) => (
              <tr key={index}>
                <td>{data.Title}</td>
                <td>{data.Duration}</td>
                <td>{data.Country}</td>
                <td>
                  <Link to={`/edit-movies/${data.id}`} className="btn btn-light">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(data.id)} className="btn btn-light">
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
            <th colSpan={4}>
            <div className="divpgn">
          <button className="btn btn-light " onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            className="btn btn-light btn22"
            onClick={handleNextPage}
            disabled={indexOfLastMovie >= movies.length}
          >
            Next
          </button>
        </div>
            </th>
          </tbody>
        </table>
        <div>
          
       
      
     
        </div>
      </div>
    </div>
  );
}

export default Gestion;
