import { React } from "react";
import { Navbar } from "../components/Navbar";
import NavBar2 from "../components/NavBar2";
import { useDispatch, useSelector } from "react-redux";
import "./WishList.css";
import { remove } from "../reducers/productReducer";



const WishList = () => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  console.log("product:---- ", product);

  return (
    <div>
      <div>{<Navbar />}</div>
      <div>{<NavBar2 />}</div>
      {product.length ? product.map((item, index) => {
        return (
          <div key={index}>
            <img className="wishImg" src={item.image} alt="srk" />
            <div>{item.prize}</div>
            <button>Move to cart</button>
            <button onClick={() => dispatch(remove(index))}>Remove</button>
          </div>
        )
      }) :
      (<h3>No items in your wishlist !</h3>)}
    </div>
  );
};
export default WishList;
