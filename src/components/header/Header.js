import React, { useEffect, useState } from "react";
import './Header.css';
import { Link, useLocation } from "react-router-dom";

const Header= () => {

  const [username, setUsername] = useState(null);
    
  useEffect( () => {
    const user = localStorage.getItem('username');
    if(user)  setUsername(user);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }

    return(
        <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link to="/" className="nav-link">Početna</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Njuške za druženje
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to="/njuskezadruzenje" className="dropdown-item">Njuške za druženje</Link></li>
                    <li><Link to="/tipicnenjuske" className="dropdown-item">Tipične njuške</Link></li>
                    <li><Link to="/sramezljivenjuske" className="dropdown-item">Sramežljive njuške</Link></li>
                    <li><Link to="/aktivnijenjuske" className="dropdown-item">Aktivnije njuške</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Njuške po dobi
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Štenci</a></li>
                    <li><Link to="/pubertetlije" className="dropdown-item">Pubertetlije</Link></li>
                    <li><Link to="/odraslenjuske" className="dropdown-item">Odrasle njuške</Link></li>
                    <li><Link to="/seniori" className="dropdown-item">Njuške seniori</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">O nama</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/poveznice" className="nav-link">Korisne poveznice</Link>
                </li>
                <li className="nav-item">

                  
              {username ? (
                <button onClick={logout }className="btn">Dobrodošli, {username}</button>

              ) : (
                <Link to="/login" className="nav-link" href="login.html">Prijava</Link>
              )
            }
            
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-outline-success" type="submit">Pretraga</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
};

export default Header;