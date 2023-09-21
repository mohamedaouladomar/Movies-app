


import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router , Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import Header from './componants/Header';
import Loginfilms from './componants/Loginfilms';
import Testmovies from './componants/Testmovies';
import Gestion from './componants/Gestion';

import Testuser from './componants/Testuser';
import AddUser from './componants/AddUser';

import Acceuil from './componants/Acceuil';
import EditUser from './componants/EditUser';
import EditMovies from './componants/EditMovies';
import Header2 from './componants/Header2';
import ViewMovies from './componants/Viewmovie';

import Addusers from './comp/Addusers'


function App() {
  return(
    <div className='App'>
      
      <Router>
      
        <Routes>
          <Route path='/' element={<Loginfilms/>}>
          <Route path='movies' element={<Gestion/>}/>
          <Route path='Testmovies' element={<Testmovies/>}/>
          <Route path="/edit-movies/:id" component={EditMovies} />


          <Route path='Testuser' element={<Testuser/>}/>
          <Route path='AddUser' element={<AddUser/>}/>
          <Route path='/Testuser/edit-user/:id' element={<EditUser/>}/>
          </Route>


          <Route path='Acceuil' element={<Acceuil/>}/>
          <Route path="/Acceuil/viewmovies/:id" element={<ViewMovies />} />
          
          
          
        </Routes>
      </Router>
    </div>
  )
}



// function App() {
//   return (
// <div className="App" >
// <Header2/>
//      <Router>
 
//         <Routes>
//         <Route path="/Acceuil" element={<Acceuil />} />
//         <Route path="/Acceuil/view-movies/:id" element={<ViewMovies />} />
//         </Routes>


     
//      </Router>
//      </div>


//   );
// }



export default App;

