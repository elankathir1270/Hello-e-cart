import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./ac/Contact";
import { Cart } from "./cart/Cart";
import { Home } from "./home/Home";
import { Login } from "./login/Login";
import { store } from "./store";
import AtForMen from "./attire/AtForMen";
import AtForWomen from "./attire/AtForWomen";
import AcForMen from "./accessories/AcForMen";
import AcForWomen from "./accessories/AcForWomen";
import HomeApp from "./homeAppliances/HomeApp";
import KitchenThings from "./homeAppliances/KitchenThings";
import Furniture from "./interiorDesign/Furniture";
import DecorThings from "./interiorDesign/DecorThings";
import WishList from "./wishList/WishList";
import { About } from "./ac/About";



export function Ecart() {
  return (
    <Provider store={store}>
      <Router>
           <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/atformen" element={<AtForMen />} />
          <Route path="/atforwomen" element={<AtForWomen />} />
          <Route path="/acformen" element={<AcForMen />} />
          <Route path="/acforwomen" element={<AcForWomen />} />
          <Route path="/homeapp" element={<HomeApp />} />
          <Route path="/kitchenthings" element={<KitchenThings />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/decorthings" element={<DecorThings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          
          </Routes>
      </Router>
      
    </Provider>
  );
}
