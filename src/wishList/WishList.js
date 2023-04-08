import {React} from "react";
import { Navbar } from '../components/Navbar';
import NavBar2 from "../components/NavBar2";
import { useSelector } from "react-redux";
import "./WishList.css";

const WishList = () => {

    const productImg = useSelector((state)=> state.product.value)
    const productPrize = useSelector((state)=> state.product.value)

    return(
        <div>

            <div>{<Navbar />}</div>
            <div>{<NavBar2 />}</div>

            <img className="wishImg" src={productImg} alt="srk" />
            <div>{productPrize}</div>
            <p>wishlist</p>
        </div>
    )
}
export default WishList;