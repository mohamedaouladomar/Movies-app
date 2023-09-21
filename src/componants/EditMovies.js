import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";


function EditMovies() {


  const [Title, setTitle] = useState("");
  const [Synopsis, setSynopsis] = useState("");
  const [Duration, setDuration] = useState("");
  const [Image, setImage] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");
  const [Rating, setRating] = useState("");
  const [Country, setCountry] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/moviess/${id}`).then((res) => {
      setTitle(res.data.Title);
      setSynopsis(res.data.Synopsis);
      setDuration(res.data.Duration);
      setImage(res.data.Image);
      setReleaseDate(res.data.ReleaseDate);
      setRating(res.data.Rating);
      setCountry(res.data.Country);
    });
  }, []);

  const data = {
    id: id,
    Title: Title,
    Synopsis: Synopsis,
    Duration: Duration,
    Image: Image,
    ReleaseDate: ReleaseDate,
    Rating: Rating,
    Country: Country

  };

  function Edit(e) {
    e.preventDefault()
    axios.put(`http://localhost:3000/moviess/${id}`, data).then(
      navigate("/movies"))
  }





  return (
    <div className="divp">
      <h2>Edit Movies</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className='div2'>
        <form className="form-row">


          <div className="form-group col-md-6 div12" >
            <label htmlFor="Id" className='labp'>
              ID :</label>

            <input value="AUTOMATIC" disabled type="text" className="form-control" />
          </div>



          <div className="form-group col-md-6 div12">
            <label className='labp'>
              Title :</label>

            <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
          </div>



          <div className="form-group col-md-6 div12" >
            <label htmlFor="titre" className='labp'>Description :</label>

            <input value={Synopsis} onChange={(e) => setSynopsis(e.target.value)} type="text" className="form-control" />

          </div>


          <div className="form-group col-md-6 div12" >
            <label htmlFor="Passqord" className='labp'>Duration :</label>

            <input

              value={Duration}
              onChange={(e) => setDuration(e.target.value)}
              type="text"
              className="form-control"

            />

          </div>



          <div className="form-group col-md-6 div12" >
            <label htmlFor="titre" className='labp'>Image :</label>

            <input value={Image} onChange={(e) => setImage(e.target.value)} type="file" className="form-control" />

          </div>



          <div className="form-group col-md-6 div12" >
            <label htmlFor="titre" className='labp'>Date :</label>

            <input value={ReleaseDate} onChange={(e) => setReleaseDate(e.target.value)} type="date" className="form-control" />

          </div>



          <div className="form-group col-md-6 div12">
            <label htmlFor="titre" className='labp'>Rating :</label>

            <input value={Rating} onChange={(e) => setRating(e.target.value)} type="text" className="form-control" />

          </div>




          <div className="form-group col-md-6 div12">
            <label htmlFor="titre" className='labp'>Country :</label>

            <input value={Country} onChange={(e) => setCountry(e.target.value)} type="text" className="form-control" />

          </div>



          <br></br>

          {/* <input type="submit" value="Save"  className="btn btn-primary" className='inp2'/> */}

          <button type="submit" className="btn btn-primary inp2" onClick={Edit}>
            Edit Movies
          </button>

        </form>
      </div>
    </div>
  )
}
export default EditMovies;