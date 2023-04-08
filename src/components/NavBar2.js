import { React, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./NavBar2.css"
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar2 = () => {
    
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);
 
    

    return(
        <div className="nav2-container">

            <div className="icons-cont">
            <div className="menu-cont">
                <div className="icon" onClick={() => {
                    setShowSidebar(!showSidebar)
                }}>{<MenuIcon />}</div>
            </div>

            <input className="searchbar" />

            <div className="wishlist">
                <div className="icon" 
                onClick={() => navigate("/wishlist")}>{<FavoriteIcon />}
                </div>
            </div>

            <div className="cart-icon">
                <div className="icon"
                onClick={() => navigate("/cart")}>{<ShoppingCartIcon />}
                </div>
            </div>
            </div>

                {showSidebar && (
                     <div className="sidebar-cont">

                        <div className="menu" 
                        onClick={() => navigate("/atformen")}>
                        MEN'S WEAR</div>

                        <div className="menu" 
                        onClick={() => navigate("/atforwomen")}>
                        WOMEN'S WEAR</div>

                        <div className="menu" 
                        onClick={() => navigate("/acformen")}>
                        MEN'S ACCESSORIES</div>

                        <div className="menu" 
                        onClick={() => navigate("/acforwomen")}>
                        WOMEN'S ACCESSORIES</div>

                        <div className="menu" 
                        onClick={() => navigate("/homeapp")}>
                        HOME APPLIANCES</div>

                        <div className="menu" 
                        onClick={() => navigate("/kitchenthings")}>
                        KITCHEN THINGS</div>

                        <div className="menu" 
                        onClick={() => navigate("/furniture")}>
                        FURNITURE</div>

                        <div className="menu" 
                        onClick={() => navigate("/decorthings")}>
                        DECOR THINGS</div>


                     </div>
                )}
                
          
           
          
        </div>
    )
}
export default NavBar2;