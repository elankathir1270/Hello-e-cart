import { React, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./NavBar2.css"
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from "./Searchbar";

const searchData = [
    {name:"men dress", link: "/atformen" },
    {name:"women dress", link: "/atforwomen"},
    {name:"men accessories",link: "/acformen"},
    {name:"women accessories",link: "/acforwomen"},
    {name:"home appliances",link: "/homeapp"},
    {name:"kitchen things",link: "/kitchenthings"},
    {name:"furniture",link: "/furniture"},
    {name:"decor things",link: "/decorthings"},
];


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

            <div className="searchbar-cont">
                <Searchbar data= {searchData} placeholder= "search" />
            </div>

            <div className="wishlist-icon">
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