import logo from '../assets/logo1.png'
import '../components_home/Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  // Seto temën kur ngarkohet faqja
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Kontrollo nëse user është loguar
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const loggedUser = localStorage.getItem("loggedInUser");

    if (loggedInStatus) {
      setIsLoggedIn(true);
      setUserEmail(loggedUser);
    }
  }, []);

  // Funksioni për logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/");
  };

  // Funksioni për ndryshimin e temës
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link" to="/">
          <img src={logo} alt="logo" width="90" height="60" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav navbar-left">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/analysis">Analysis</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/research">Research</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partnership
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Available soon</a></li>
                <li><a className="dropdown-item" href="#">Available soon</a></li>
                <li><a className="dropdown-item" href="#">Available soon</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="navbar-nav d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <li className="nav-item p-2 text-white d-flex align-items-center">
                  <i className="bi bi-person-circle fs-5 me-1"></i> {userEmail}
                </li>
                <li className="nav-item p-2">
                  <button className="btn btn-sm btn-outline-light" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Log in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
              </>
            )}

            {/* Butoni për ndërrim teme */}
            <li className="nav-item p-2">
              <i
                onClick={toggleTheme}
                className={`bi ${theme === "light" ? "bi-moon" : "bi-brightness-high"} text-white fs-5`}
                style={{ cursor: "pointer", transition: "0.3s" }}
                title={theme === "light" ? "Dark mode" : "Light mode"}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
