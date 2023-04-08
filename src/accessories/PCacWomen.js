import {React} from "react";
import ProductCard from "../components/ProductCard"
import "./ProductCarousel.css"

const PCacWomen = () => {

    let box = document.querySelector(".productContainer");

    const prevbtnpress = () =>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        
        }

    const nextbtnpress = () =>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
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

    const womenAc3 = [
        {
            id:1,image: "./acwomen3/c1.jpg",prize: "700",name: "Wallet"
        },
        {
           id:2, image:"./acwomen3/c2.jpg", prize: "999", name: "Wallet",
        },
        {
            id:3, image:"./acwomen3/c3.jpg", prize: "799", name: "Wallet",
        },
        {
            id:4,image: "./acwomen3/c4.jpg",prize: "1400",name: "Hand Bag"
        },
        {
           id:5, image:"./acwomen3/c5.jpg", prize: "1600", name: "Hand Bag",
        },
        {
            id:6, image:"./acwomen3/c6.webp", prize: "1999", name: "Watch",
        },
        {
            id:7,image: "./acwomen3/c7.webp",prize: "2999",name: "Watch"
        },
        {
           id:8, image:"./acwomen3/c8.webp", prize: "1750", name: "Watch",
        },
        {
            id:9, image:"./acwomen3/c9.webp", prize: "1800", name: "Watch",
        },
        {
            id:10, image:"./acwomen3/c10.webp", prize: "1999", name: "Watch",
        },
    ]

    const womenS3 = womenAc3.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 

    const womenAc2 = [
        {
            id:1,image: "./acwomen2/b1.webp",prize: "1100",name: "Sandals"
        },
        {
           id:2, image:"./acwomen2/b2.webp", prize: "1550", name: "Sandals",
        },
        {
            id:3, image:"./acwomen2/b3.jpg", prize: "1650", name: "Sandals",
        },
        {
            id:4,image: "./acwomen2/b4.jpg",prize: "1250",name: "Sandals"
        },
        {
           id:5, image:"./acwomen2/b5.jpg", prize: "1499", name: "Sandals",
        },
        {
            id:6, image:"./acwomen2/b6.jpg", prize: "1560", name: "Sneackers",
        },
        {
            id:7,image: "./acwomen2/b7.jpg",prize: "1350",name: "Sneackers"
        },
        {
           id:8, image:"./acwomen2/b8.webp", prize: "1500", name: "Sneackers",
        },
        {
            id:9, image:"./acwomen2/b9.jpg", prize: "1700", name: "Sneackers",
        },
        {
            id:10, image:"./acwomen2/b10.jpg", prize: "1300", name: "Sneackers",
        },
    ]

    const womenS2 = womenAc2.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 

    const womenAc1 = [
        {
            id:1,image: "./acwomen1/a1.jpg",prize: "200",name: "LipStick"
        },
        {
           id:2, image:"./acwomen1/a2.webp", prize: "400", name: "LipStick",
        },
        {
            id:3, image:"./acwomen1/a3.jpeg", prize: "350", name: "LipStick",
        },
        {
            id:4,image: "./acwomen1/a4.avif",prize: "299",name: "Eyeliner",
        },
        {
           id:5, image:"./acwomen1/a5.avif", prize: "300", name: "Eyeliner",
        },
        {
            id:6, image:"./acwomen1/a6.jpg", prize: "600", name: "Perfume",
        },
        {
            id:7,image: "./acwomen1/a7.jpg",prize: "550",name: "Perfume"
        },
        {
           id:8, image:"./acwomen1/a8.webp", prize: "700", name: "Perfume",
        },
        {
            id:9, image:"./acwomen1/a9.webp", prize: "499", name: "Nail Polish",
        },
        {
            id:10, image:"./acwomen1/a10.jpg", prize: "400", name: "Nail Polish",
        },
    ]


    const womenS1 = womenAc1.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 
   

    return(
        <div>
        <div className="ProductCarousel">
        <h1>Miscellaneous</h1>
            <button className="pre-btn" onClick={prevbtnpress}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtnpress}><p>&gt;</p></button>
            
            <div className="productContainer">
                {womenS1}
            </div>

        </div>

        <div className="ProductCarousel">
        <h1>Sandels & Sneakers</h1>
            <button className="pre-btn" onClick={prevbtn1press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn1press}><p>&gt;</p></button>

            <div className="productContainer1">
                {womenS2}
            </div>

        </div>

        
        <div className="ProductCarousel">
        <h1>Hand bag & Watches</h1>
            <button className="pre-btn" onClick={prevbtn2press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn2press}><p>&gt;</p></button>

            <div className="productContainer2">
                {womenS3}
            </div>

        </div>

        </div>
       
    )
}
export default PCacWomen;