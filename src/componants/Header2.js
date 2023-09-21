import React from 'react';
import { Link } from 'react-router-dom';
import './Headerstyle.css';
function Header() {
    return(
        <nav class="bg-dark navbar-dark navbar" className='nav1'>
            
            <div className="row col-12 d-flex justify-content-center text-white">
                <label className='h31'>ACCUEIL MOVIES
                <span className='spnmn'>
                <Link  to='/' > Im  admin</Link>
                </span>
                </label>
                
                
            </div>
        </nav>
    )
}
export default Header;