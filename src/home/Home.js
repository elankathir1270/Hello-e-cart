import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar2 from "../components/NavBar2";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);

  return (
    <div>
      <div>{<Navbar />}</div>
      <div>{<NavBar2 />}</div>

      <div className="homeBody">
        <div className="container">
          <h1>ATTIRE</h1>
          <div className="inner-div">
            <div className="brown-bg">
            <Link className="a" to="/atformen">
                <div className="pic one">
                <h3>FOR MEN</h3>
              </div>
              </Link>
              
            </div>
            <div className="brown-bg">
            <Link className="a" to="/atforwomen">
              <div className="pic two">
                <h3>FOR WOMEN</h3>
              </div>
            </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h1>ACCESSORIES</h1>
          <div className="inner-div">
            <div className="brown-bg">
            <Link className="a" to="/acformen">
              <div className="pic three">
              <h3>FOR MEN</h3>
              </div>
              </Link>
            </div>
            <div className="brown-bg">
            <Link className="a" to="/acforwomen">
              <div className="pic four">
              <h3>FOR WOMEN</h3>
              </div>
            </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h1>HOME APPLIANCES</h1>
          <div className="inner-div">
            <div className="brown-bg">
            <Link className="a" to="/homeapp">
              <div className="pic five">
                <h3>HOME APPLIANCES</h3>
              </div>
              </Link>
            </div>
            <div className="brown-bg">
            <Link className="a" to="/kitchenthings">
              <div className="pic six">
                <h3> KITCHEN THINGS</h3>
              </div>
            </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h1>INTERIOR DESIGN</h1>
          <div className="inner-div">
            <div className="brown-bg">
            <Link className="a" to="/furniture">
              <div className="pic seven">
              <h3>FURNITURE</h3>
              </div>
              </Link>
            </div>
            <div className="brown-bg">
            <Link className="a" to="/decorthings">
              <div className="pic eight">
              <h3>DECOR THINGS</h3>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
