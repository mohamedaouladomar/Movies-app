import axios from "axios";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function AddUser() {

  const [id, setid] = useState("");

  const [username, setuserame] = useState("");

  const [password, setpassword] = useState("");



  const navigate = useNavigate();



  const data = {

    id: id,

    username: username,

    password: password,

  };

  function Save(e) {

    e.preventDefault();

    axios.post("http://localhost:3000/userss", data).then(navigate("/Testuser"));

  }



  return (

    <div className="divp">
    <h2>Add User</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className='div2'>
      <form  class="form-row">


      <div class="form-group col-md-6" className='div12'>
        <label htmlFor="Id" className='labp'>
          ID :</label> 

        <input value={id} onChange={(e) => setid(e.target.value)} type="text" className="form-control"/>
        </div>



        <div class="form-group col-md-6" className='div12'>
        <label htmlFor="titre" className='labp'>UserName :</label>

        <input value={username} onChange={(e) => setuserame(e.target.value)} type="text" className="form-control"/>

        </div>


        <div class="form-group col-md-6" className='div12'>
        <label htmlFor="Passqord" className='labp'>Password :</label> 

        <input

          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="Password"
          className="form-control"

        />

        </div>

        <input onClick={Save} type="submit" value="Save"  class="btn btn-primary" className='inp2'/>

       

      </form>
    </div>
   </div>

  );

}

export default AddUser;