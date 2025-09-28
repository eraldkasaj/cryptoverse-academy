import logo from '../assets/logo1.png'
import '../components_home/Navbar.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Search from '../components/Search';


const Navbar = () => {

 const [showSearch,setShowSearch] = useState(false)

    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand nav-link" to="/"><img src={logo} alt="logo" width="90" height="60"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav navbar-left">
         <li className="nav-item dropdown ">
          <Link className="nav-link text-white" to="/analysis">
            Analysis
          </Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link  text-white" to="/research">Research</Link>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">soon</a></li>
            <li><a className="dropdown-item" href="#">soon</a></li>
            <li><a className="dropdown-item" href="#">soon</a></li>
          </ul>
        </li>
       




        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Partnership
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">soon</a></li>
            <li><a className="dropdown-item" href="#">soon</a></li>
            <li><a className="dropdown-item" href="#">soon</a></li>
          </ul>
        </li>
      </ul>
    </div>
    {/*navbar-right*/}
    
        <div className='navbar-right'>
             <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item p-2">
                   <i className="bi bi-search text-white" onClick={() => {setShowSearch(!showSearch)}}></i>
                  </li>
                   {showSearch && (
                    <li className="nav-item">
                      <Search onSearch={(q) => console.log("Kërkohet:", q)}/>
                    </li>
                  )}
                  <li className="nav-item"><a className="nav-link text-white" aria-current="page" href="#">Log in</a> </li>
                   <li className="nav-item"><a className="nav-link text-white" aria-current="page" href="#">Register</a> </li>
                     <li className="nav-item p-2"><i className="bi bi-translate text-white"></i></li>
                     <li className="nav-item p-2"><i className="bi bi-brightness-high text-white"></i></li>
             </ul>
        </div>

  </div>
</nav>
    )
}

export default Navbar