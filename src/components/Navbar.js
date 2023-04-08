import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";


  export const Navbar = () => {

    const username = useSelector((state) => state.user.value.username);

    return(

        <div className="navbar-container">

        <div className="hello-tag">
              
             <h1>Hello! {username}</h1>
        </div>
        <div className="nav-btns">

            <Link className="buttonStyle" to="/home">HOME
            </Link>
            <Link className="buttonStyle"  to="/about">ABOUT
            </Link>
            <Link className="buttonStyle"  to="/contact">CONTACT
            </Link>
            <Link className="buttonStyle"  to="/">LOGOUT
            </Link>

        </div>
        
      
      </div>



    )
  }