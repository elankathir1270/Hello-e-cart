import {React, useRef} from "react";
import ProductCard from "../components/ProductCard"
import "./ProductCarousel.css"

const PCacMen = () => {
    console.log("PCacMen component invoked")

    // let box = document.querySelector(".productContainer");
    const containerRef1 = useRef(null)

    const prevbtnpress = () => {
        let width = containerRef1?.current?.clientWidth;
        containerRef1.current.scrollLeft = containerRef1?.current?.scrollLeft - width;
        
        }

    const nextbtnpress = () =>{
        let width = containerRef1?.current?.clientWidth;
        containerRef1.current.scrollLeft = containerRef1?.current?.scrollLeft + width;
    }

    let box1 = document.querySelector(".productContainer1");

    const prevbtn1press = () =>{
        let width = box1.clientWidth;
        box1.scrollLeft = box1.scrollLeft - width;
        
        }

    const nextbtn1press = () =>{
        let width = box1.clientWidth;
        box1.scrollLeft = box1.scrollLeft + width;
    }

    let box2 = document.querySelector(".productContainer2");

    const prevbtn2press = () =>{
        let width = box2.clientWidth;
        box2.scrollLeft = box2.scrollLeft - width;
        
        }

    const nextbtn2press = () =>{
        let width = box2.clientWidth;
        box2.scrollLeft = box2.scrollLeft + width;
    }

    const menAc3 = [
        {
            id:1,image: "./acmen3/c1.jpg",prize: "1100",name: "Wallet"
        },
        {
           id:2, image:"./acmen3/c2.jpg", prize: "1000", name: "Wallet",
        },
        {
            id:3, image:"./acmen3/c3.jpg", prize: "1250", name: "Wallet",
        },
        {
            id:4,image: "./acmen3/c4.webp",prize: "1200",name: "Wallet"
        },
        {
           id:5, image:"./acmen3/c5.jpeg", prize: "1200", name: "Belt",
        },
        {
            id:6, image:"./acmen3/c6.jpg", prize: "999", name: "Belt",
        },
        {
            id:7,image: "./acmen3/c7.webp",prize: "1150",name: "Belt"
        },
        {
           id:8, image:"./acmen3/c8.webp", prize: "1250", name: "Perfume",
        },
        {
            id:9, image:"./acmen3/c9.jpg", prize: "800", name: "Perfume",
        },
        {
            id:10, image:"./acmen3/c10.webp", prize: "999", name: "Perfume",
        },
    ]

    const menS3 = menAc3.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 

    const menAc2 = [
        {
            id:1,image: "./acmen2/b1.jpg",prize: "1100",name: "Sandals"
        },
        {
           id:2, image:"./acmen2/b2.webp", prize: "1550", name: "Sandals",
        },
        {
            id:3, image:"./acmen2/b3.jpeg", prize: "1650", name: "Sandals",
        },
        {
            id:4,image: "./acmen2/b4.webp",prize: "650",name: "Sandals"
        },
        {
           id:5, image:"./acmen2/b5.webp", prize: "699", name: "Sandals",
        },
        {
            id:6, image:"./acmen2/b6.webp", prize: "1560", name: "Sneackers",
        },
        {
            id:7,image: "./acmen2/b7.jpg",prize: "1350",name: "Sneackers"
        },
        {
           id:8, image:"./acmen2/b8.webp", prize: "1500", name: "Sneackers",
        },
        {
            id:9, image:"./acmen2/b9.webp", prize: "1700", name: "Sneackers",
        },
        {
            id:10, image:"./acmen2/b10.jpg", prize: "1999", name: "Sneackers",
        },
    ]

    const menS2 = menAc2.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 

    const menAc1 = [
        {
            id:1,image: "./acmen1/a1.webp",prize: "1400",name: "Sun Glass"
        },
        {
           id:2, image:"./acmen1/a2.jpg", prize: "1100", name: "Sun Glass",
        },
        {
            id:3, image:"./acmen1/a3.webp", prize: "1250", name: "Sun Glass",
        },
        {
            id:4,image: "./acmen1/a4.jpg",prize: "999",name: "Sun Glass",
        },
        {
           id:5, image:"./acmen1/a5.webp", prize: "1000", name: "Sun Glass",
        },
        {
            id:6, image:"./acmen1/a6.webp", prize: "1600", name: "Wrist Watch",
        },
        {
            id:7,image: "./acmen1/a7.webp",prize: "1550",name: "Wrist Watch"
        },
        {
           id:8, image:"./acmen1/a8.jpg", prize: "1700", name: "Wrist Watch",
        },
        {
            id:9, image:"./acmen1/a9.jpg", prize: "1400", name: "Wrist Watch",
        },
        {
            id:10, image:"./acmen1/a10.webp", prize: "1999", name: "Wrist Watch",
        },
    ]


    const menS1 = menAc1.map((item, i) => {
        return <ProductCard 
        key={i} image= {item.image} prize= {item.prize} name= {item.name} />
    }) 
   

    return(
        <div>
        <div className="ProductCarousel">
        <h1>Sun Glass & Watch</h1>
            <button className="pre-btn" onClick={prevbtnpress}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtnpress}><p>&gt;</p></button>
            
            <div ref={containerRef1} className="productContainer">
                {menS1}
            </div>

        </div>

        <div className="ProductCarousel">
        <h1>Sandels & Sneakers</h1>
            <button className="pre-btn" onClick={prevbtn1press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn1press}><p>&gt;</p></button>

            <div className="productContainer1">
                {menS2}
            </div>

        </div>

        
        <div className="ProductCarousel">
        <h1>Miscellaneous</h1>
            <button className="pre-btn" onClick={prevbtn2press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn2press}><p>&gt;</p></button>

            <div className="productContainer2">
                {menS3}
            </div>

        </div>

        </div>
       
    )
}
export default PCacMen;