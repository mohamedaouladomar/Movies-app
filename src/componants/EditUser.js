import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './edituser.css';

function EditUser(){

   
    const [username, setuserame] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const { id } =useParams();
    
    useEffect(() => {
      axios.get(`http://localhost:3000/userss/${id}`).then((res) => {
        setuserame(res.data.username);
        setpassword(res.data.password);
    });
  },[]);

  const data ={
    id: id,
    username: username,
    password: password,
  }

  function Edit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/userss/${id}` , data).then(
      navigate("/Testuser"))
  }
  
     


    return(
        <div>
             <div className="divp">
    <h2>Edit User</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className='div2'>
      <form  class="form-row">


      <div class="form-group col-md-6" className='div12'>
        <label htmlFor="Id" className='labp'>
          ID :</label> 

        <input type="text" value="AUTOMATIC" className="form-control" disabled/>
        </div>



        <div class="form-group col-md-6" className='div12'>
        <label htmlFor="titre" className='labp'>UserName :</label>

        <input value={username} onChange={(e) => setuserame(e.target.value)} type="text" className="form-control"/>

        </div>


        <div class="form-group col-md-6" className='div12'>
        <label  className='labp' for="pwd">Password :</label> 

        <input

          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="text"
          class="form-control"
          id="pwd"

        />

        </div>
<br></br>
        {/* <input onClick={Save} type="submit" value="Edit user"  class="btn btn-primary" className='inp2'/> */}
        <button type="submit"   class="btn btn-primary" className='inp2' onClick={Edit}>
         Edit User </button>

       

      </form>
    </div>
   </div>
        </div>
    )
}
export default EditUser;