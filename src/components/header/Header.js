import React, { useEffect, useState } from "react";
import './Header.css';
import { Link, useLocation } from "react-router-dom";

const Header= () => {

  const [username, setUsername] = useState(null);
    
  useEffect( () => {
    const user = localStorage.getItem('username');
    if(user)  setUsername(user);
  }, []);

  const location = useLocation();
  console.log(location);
  if(location.pathname === '/login' || location.pathname === '/register') return null;

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
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="njuske-za-druzenje.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Njuške za druženje
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="njuske-za-druzenje.html">Tipične njuške</a></li>
                    <li><a className="dropdown-item" href="njuske-za-druzenje.html">Sramežljive njuške</a></li>
                    <li><a className="dropdown-item" href="njuske-za-druzenje.html">Aktivnije njuške</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Njuške po dobi
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Štenci</a></li>
                    <li><a className="dropdown-item" href="#">Pubertetlije</a></li>
                    <li><a className="dropdown-item" href="#">Odrasle njuške</a></li>
                    <li><a className="dropdown-item" href="#">Njuške seniori</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Njuške po gradovima
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Zagreb</a></li>
                    <li><a className="dropdown-item" href="#">Rijeka</a></li>
                    <li><a className="dropdown-item" href="#">Split</a></li>
                    <li><a className="dropdown-item" href="#">Varaždin</a></li>
                    <li><a className="dropdown-item" href="#">Osijek</a></li>
                    <li><a className="dropdown-item" href="#">Zadar</a></li>
                    <li><a className="dropdown-item" href="#">Dubrovnik</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">O nama</Link>
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