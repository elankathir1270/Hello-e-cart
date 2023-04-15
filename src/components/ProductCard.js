import {React,useEffect, useState} from "react"
import "./ProductCard.css"
import { collect } from "../reducers/productReducer";
import {useDispatch } from 'react-redux';
import ProductDetails from "./ProductDetails";


const ProductCard =({image,prize,name}) => {

    const [productImg, setProductImg] = useState();
    const [productPrize, setProductPrize] = useState("");

    const dispatch = useDispatch();
  

    useEffect(()=> {
        setProductImg({image})
        setProductPrize({prize})

        return () => {}
    },[])

    return(
        <div className="ProductCard">
            <div className="product-pic">
                <img className="image" src={image} alt="s1" 
            
                />
                
            </div>
            <div className="prize">
                <p className="prize-tag">&#8377;{prize}</p>
                <p className="product-name">{name}</p>
            </div>
            <button className="wishList"
            onClick={()=> {
                dispatch(collect({...productImg, ...productPrize}))
            }}
            >
            WISH LIST</button>
            <button className="cart">ADD TO CART</button>
        </div>
    )
}

export default ProductCard