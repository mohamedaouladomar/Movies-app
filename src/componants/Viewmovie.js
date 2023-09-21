import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import "../componants/Accueil.css";
import Header2 from '../componants/Header2'
function ViewMovies() {

    
    const [Title, setTitle] = useState("");
    const [Synopsis, setSynopsis] = useState("");
    const [Duration, setDuration] = useState("");
    const [Image, setImage] = useState("");
    const [ReleaseDate, setReleaseDate] = useState("");
    const [Rating, setRating] = useState("");
    const [Country, setCountry] = useState("");

    const navigate = useNavigate();

    const { id } =useParams();

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
  },[]);

  const data = {
    id:id,
    Title: Title,
    Synopsis: Synopsis,
    Duration: Duration,
    Image: Image,
    ReleaseDate: ReleaseDate,
    Rating: Rating,
    Country: Country

  };


  




    return(
      <div>
        <Header2/>  
        <div className="divvpp">

        

        <div className="leftdiv2" >

            <div className="dvimg">
            <img className="img3" src={Image} />
            </div>

        </div>



         <div className="divmov3">
                <div className="title2">{Title}  </div>
                <br/>
                <div className="dt">{ReleaseDate} - {Country} - {Duration}</div>
<br></br>

                <div  className={`rating2 ${data.Rating > 7 ? "green2" : data.Rating > 5 ? "yellow2" : "red2"}`}>
                    <label className="lab">
                    {Rating}
                   </label>
                </div>

                <br></br>
<br></br>
                <div>
                    <label className="labdesc">
                        {Synopsis}
                    </label>
                    <br></br>
                    <br></br>
                   
                </div>
                <div className="lnk33">
                <Link to='/Acceuil' >Back To Acceuil</Link>
                </div>


                
         </div>
         


         <br/>

         
                
         



</div>





</div>
             

     
    )
}
export default ViewMovies;