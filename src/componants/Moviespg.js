// import axios from "axios";

// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";

// function AddUser() {

//   const [Title, setTitle] = useState("");

//   const [Synopsis, setSynopsis] = useState("");

//   const [Duration, setDuration] = useState("");

//   const [Image, setImage] = useState("");

//   const [ReleaseDate, setReleaseDate] = useState("");

//   const [Rating, setRating] = useState("");

//   const [Country, setCountry] = useState("");



//   const navigate = useNavigate();



//   const data = {

//     Title: Title,

//     Synopsis: Synopsis,

//     Duration: Duration,

//     Image: Image,

//     ReleaseDate: ReleaseDate,

//     Rating: Rating,

//     Country: Country,

//   };

//   function Save(e) {

//     e.preventDefault();

//     axios.post("http://localhost:3000/moviess", data).then(navigate("/Gestion"));

//   }



//   return (

//     <div className="divp">
//     <h2>Add Movies</h2>
//       <br></br>
//       <br></br>
//       <br></br>
//       <div className='div2'>
//       <form  class="form-row">


//       <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="Id" className='labp'>
//           Title :</label> 

//         <input value={Title} onChange={(e) => setid(e.target.value)} type="text" className="form-control"/>
//         </div>



//         <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="titre" className='labp'>Description :</label>

//         <input value={Synopsis} onChange={(e) => setuserame(e.target.value)} type="text" className="form-control"/>

//         </div>


//         <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="Passqord" className='labp'>Duration :</label> 

//         <input

//           value={Duration}
//           onChange={(e) => setpassword(e.target.value)}
//           type="date"
//           className="form-control"

//         />

//         </div>



//         <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="titre" className='labp'>Image :</label>

//         <input value={Image} onChange={(e) => setuserame(e.target.value)} type="file" className="form-control"/>

//         </div>



//         <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="titre" className='labp'>Date :</label>

//         <input value={ReleaseDate} onChange={(e) => setuserame(e.target.value)} type="date" className="form-control"/>

//         </div>



//         <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="titre" className='labp'>Raiting :</label>

//         <input value={Rating} onChange={(e) => setuserame(e.target.value)} type="text" className="form-control"/>

//         </div>




//         <div class="form-group col-md-6" className='div12'>
//         <label htmlFor="titre" className='labp'>Country :</label>

//         <input value={Country} onChange={(e) => setuserame(e.target.value)} type="text" className="form-control"/>

//         </div>





//         <input onClick={Save} type="submit" value="Save"  class="btn btn-primary" className='inp2'/>

       

//       </form>
//     </div>
//    </div>

//   );

// }

// export default AddUser;