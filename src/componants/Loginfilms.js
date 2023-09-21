import React, { useState, useEffect } from "react";
import axios from 'axios';

import '../componants/Login.css'
import Header from "./Header";
import Gestion from "../componants/Gestion";
import { Outlet, Link } from "react-router-dom";

function Login(){
    const [name, setName] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userss, setUserss] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/userss')
        .then(response => {
          setUserss(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const errors = {
      uname: "Votre identifiant est incorrect.",
      upass: "Votre mot de passe est incorrect."
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      var { uname, upass } = document.forms[0];
      setName(uname.value);
      const userData = userss.find((user) => user.username === uname.value);

      if (userData) {
        if (userData.password !== upass.value) {
          setErrorMessages({ name: "upass", message: errors.upass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };


    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    const renderForm = (
      <div>
        <Header/>
      <div className="divp1">
        <div className="divp2">
          <form onSubmit={handleSubmit}>
            <div className="divp3">
              <label  className="labb" >Username :</label> <br></br>
              <input type="text" name="uname" className="inn1" required />
              {renderErrorMessage("uname")}
            </div>
            <br/>
            <div className="divp4">
              <label   className="labb2">Password : </label> <br></br>
              <input type="password" name="upass" className="inn2" required />
              {renderErrorMessage("upass")}
            </div>
            <br/>
            <div className="divp5">
              <button type="submit"  className="button1"> Se connecter</button>
              <br/>
              <Link  to='Acceuil' className="lnk77" > Im not admin</Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    );

    return (
      
      <div className="app">
     
        {isSubmitted ? <div>
          <Header/>
            <div className="title">
                </div>
      
                <div className="">
          <div class="col-4" className="linkdiv">
            <Link className="link1" class="btn btn-outline-primary btn-lg btn-block" style={{width:"500px",height:"60px"}} to='movies' >Movies</Link>

            <br></br>
            <br></br>
            <Link  className="butt1" class="btn btn-outline-primary btn-lg btn-block"  style={{width:"500px",height:"60px"}} to='Testuser'>Users</Link>
            <br></br>
            <br></br>
            <Link className="butt1"  class="btn btn-outline-primary btn-lg btn-block" style={{width:"500px",height:"60px"}} to="/ ">Logout</Link>
          </div>
          <Outlet />
          </div>     

                </div> : renderForm
      }
  </div>
    );
  }
export default Login;
