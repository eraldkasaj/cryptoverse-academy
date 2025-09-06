import '../navbar/Navbar.css'
import binance_logo from '../assets/binance_logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={binance_logo} alt="logo" width="90" height="60"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav navbar-left">
         <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Articles
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="#">Academy</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Partnership
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    */navbar-right*/
    
        <div className='navbar-right'>
             <ul className="navbar-nav">
                <li className="nav-item"><button className="btn"><i className="bi bi-search text-white"></i></button>  </li>
                  <li className="nav-item"><a className="nav-link text-white" aria-current="page" href="#">Log in</a> </li>
                   <li className="nav-item"><a className="nav-link text-white" aria-current="page" href="#">Register</a> </li>
                     <li className="nav-item"><button className="btn"><i className="bi bi-translate text-white"></i></button>  </li>
                     <li className="nav-item"><button className="btn"><i className="bi bi-brightness-high text-white"></i></button>  </li>
             </ul>
        </div>


  </div>
</nav>
    )
}

export default Navbar