// [9:32 AM] EL MEHDI AHMED
// import React,{useState,useEffect} from "react";

// import axios from "axios";

// import { Link } from "react-router-dom";

// function Users() {

//     const [users,setUsers] =useState([]);

//     useEffect(()=>{

//         axios.get("http://localhost:3000/dbusers")

//         .then((res)=>{

//             setUsers(res.data.reverse());    
//         })
//     },[])

//     return(

//         <div>

//             <div>
//             <Link type="submit" className="btn btn-outline-primary btn-lg btn-block" style={{width: "100%"}} to="/Main/AddUser"  >Add User </Link>
//             </div>

//             <br/> <br/>
//                
//             <table className="table">

//                 <thead>

//                     <tr className="bg-primary text-light text-center">
//                         <th scope="col">Id</th>
//                         <th scope="col">UserName</th>
//                         <th scope="col">Password</th>
//                         <th scope="col"> Action</th>
//                     </tr>

//                 </thead>

//                 <tbody>

//                     {users.map((data ,index)=>(

//                     <tr key={index}  className="text-center">

//                         <td >{data.Id} </td>
//                         <td>{data.Username}</td>
//                         <td>{data.Password}</td>
//                         <td>
//                             <button>View</button>
//                             <button>Edit</button>
//                             <button>Delete</button>
//                         </td>

//                     </tr>))}

//                 </tbody>

//             </table>

//     </div>

// );

// }

// export default Users;

// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// export default function Users() {
//   return (
//     <div className='w-full h-full flex flex-col px-5 py-5'>

//     <table class="table table-light table-hover table-stripped">
//         <thead>
//             <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">First</th>
//                 <th scope="col">Last</th>
               
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//             <th scope="row">1</th>
//                 <td>Mark</td>
//                 <td>Otto</td>
               
//             </tr>
//             <tr>
//                 <th scope="row">2</th>
//                 <td>Jacob</td>
//                 <td>Thornton</td>
               
//             </tr>
//             <tr>
//                 <th scope="row">3</th>
//                 <td>Larry the Bird</td>
//                 <td>test</td>
               
//             </tr>
//         </tbody>
//     </table>
     
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import '../componants/Addmovies.css';


// function AddUser() {
//   const [user, setUser] = useState({ id: '', username: '', password: '' });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add user logic here (e.g. API call to add user to database)
//     console.log(user);
//   }

//   return (
//     <div className="divp">
//         <h2>Add User</h2>
//           <br></br>
//           <br></br>
//           <br></br>
//           <div className='div2'>
//     <form onSubmit={handleSubmit} class="form-row">

//     <div class="form-group col-md-6" className='div12'>
//       <label className='labp'>
//         ID:</label>
//         <input type="text" name="id"  class="form-control" value={user.id} onChange={handleChange} />
      
//       </div>
    
          

      
//       <div class="form-group col-md-6" className='div12'>
//       <label className='labp'>
//         Username:</label>
//         <input type="text" name="username"  class="form-control" value={user.username} onChange={handleChange} />
      
//       </div>

      
          

      
//       <div class="form-group col-md-6" className='div12'>
//       <label className='labp'>
//         Password:</label>
//         <input type="password"  class="form-control" name="password" value={user.password} onChange={handleChange} />
      
//       </div>


      
//       <br />
//       <input type="submit" value="Submit" class="btn btn-primary" className='inp2'/>
//       <br />
//       <br />
//       <div>
//         {/* <p>ID: {user.id}</p>
//         <p>Username: {user.username}</p>
//         <p>Password: {user.password}</p> */
//        }
        
//       </div>
//     </form>
//     </div>
//     </div>
//   );
// }

// export default AddUser;




import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    duration: '',
    image: '',
    date: '',
    rating: '',
    country: '',
  });
  let history = useHistory();

  const handleChange = (event) => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value
    });
  }

  const testMovies = (event) => {
    event.preventDefault();
    console.log('Movie:', movie);
    // add code here to submit movie to your backend
    history.push({
      pathname: '/movie',
      state: { movie }
    });
  }

  return (
    <div>
      <form onSubmit={testMovies}>
        <label>
          Title:
          <input type="text" name="title" value={movie.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={movie.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Duration:
          <input type="text" name="duration" value={movie.duration} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={movie.image} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="text" name="date" value={movie.date} onChange={handleChange} />
        </label>
        <br />
        <label>
          Rating:
          <input type="text" name="rating" value={movie.rating} onChange={handleChange} />
        </label>
        <br />
        <label>
          Country:
          <input type="text" name="country" value={movie.country} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

const MovieInfo = (props) => {
  const movie = props.location.state.movie;
  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Description: {movie.description}</p>
      <p>Duration: {movie.duration}</p>
      <p>Image: {movie.image}</p>
      <p>Date: {movie.date}</p>
      <p>Rating: {movie.rating}</p>
      <p>Country: {movie.country}</p>
    </div>
  );
}

export { AddMovie, MovieInfo}



