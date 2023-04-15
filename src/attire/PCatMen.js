import {React} from "react";
import ProductCard from "../components/ProductCard"
import "./ProductCarousel.css"

const PCatMen = () => {

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

    const menTrousers = [
        {
            id:1,image: "./mentrousers/tr1.webp",prize: "1300",name: "Round neck"
        },
        {
           id:2, image:"./mentrousers/tr2.avif", prize: "1100", name: "Round neck",
        },
        {
            id:3, image:"./mentrousers/tr3.webp", prize: "1250", name: "Round neck",
        },
        {
            id:4,image: "./mentrousers/tr4.webp",prize: "1200",name: "Round neck"
        },
        {
           id:5, image:"./mentrousers/tr5.jpg", prize: "1200", name: "Round neck",
        },
        {
            id:6, image:"./mentrousers/tr6.avif", prize: "1200", name: "Polo tshirt",
        },
        {
            id:7,image: "./mentrousers/tr7.webp",prize: "1350",name: "Polo tshirt"
        },
        {
           id:8, image:"./mentrousers/tr8.webp", prize: "1250", name: "Polo tshirt",
        },
        {
            id:9, image:"./mentrousers/tr9.jpg", prize: "1400", name: "Polo tshirt",
        },
        {
            id:10, image:"./mentrousers/tr10.jpg", prize: "1999", name: "Polo tshirt",
        },
    ]

    const menS3 = menTrousers.map((item) => {
        return <ProductCard
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 

    const menTShirt = [
        {
            id:1,image: "./mentshirt/t1.webp",prize: "700",name: "Round neck"
        },
        {
           id:2, image:"./mentshirt/t2.webp", prize: "550", name: "Round neck",
        },
        {
            id:3, image:"./mentshirt/t3.jpg", prize: "450", name: "Round neck",
        },
        {
            id:4,image: "./mentshirt/t4.avif",prize: "770",name: "Round neck"
        },
        {
           id:5, image:"./mentshirt/t5.jpg", prize: "1000", name: "Round neck",
        },
        {
            id:6, image:"./mentshirt/t6.jpg", prize: "560", name: "Polo tshirt",
        },
        {
            id:7,image: "./mentshirt/t7.webp",prize: "350",name: "Polo tshirt"
        },
        {
           id:8, image:"./mentshirt/t8.jpg", prize: "500", name: "Polo tshirt",
        },
        {
            id:9, image:"./mentshirt/t9.jpg", prize: "700", name: "Polo tshirt",
        },
        {
            id:10, image:"./mentshirt/t10.jpg", prize: "999", name: "Polo tshirt",
        },
    ]

    const menS2 = menTShirt.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 

    const menShirt = [
        {
            id:1,image: "./menshirt/s2.webp",prize: "1200",name: "Formal shirt"
        },
        {
           id:2, image:"./menshirt/s3.jpg", prize: "1100", name: "Party wear",
        },
        {
            id:3, image:"./menshirt/s4.webp", prize: "1250", name: "Formal shirt",
        },
        {
            id:4,image: "./menshirt/s5.webp",prize: "999",name: "Casual shirt"
        },
        {
           id:5, image:"./menshirt/s6.jpg", prize: "1000", name: "Formal shirt",
        },
        {
            id:6, image:"./menshirt/s7.jpg", prize: "1200", name: "Casual shirt",
        },
        {
            id:7,image: "./menshirt/s8.jpg",prize: "1350",name: "Casual shirt"
        },
        {
           id:8, image:"./menshirt/s9.jpg", prize: "1250", name: "Formal shirt",
        },
        {
            id:9, image:"./menshirt/s10.jpg", prize: "1400", name: "Casual shirt",
        },
        {
            id:10, image:"./menshirt/s1.jpg", prize: "999", name: "Casual shirt",
        },
    ]


    const menS1 = menShirt.map((item) => {
        return <ProductCard 
        image= {item.image} prize= {item.prize} name= {item.name} />
    }) 
   

    return(
        <div>
        <div className="ProductCarousel">
        <h1>Shirts</h1>
            <button className="pre-btn" onClick={prevbtnpress}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtnpress}><p>&gt;</p></button>
            
            <div className="productContainer">
                {menS1}
            </div>

        </div>

        <div className="ProductCarousel">
        <h1>T-Shirts</h1>
            <button className="pre-btn" onClick={prevbtn1press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn1press}><p>&gt;</p></button>

            <div className="productContainer1">
                {menS2}
            </div>

        </div>

        
        <div className="ProductCarousel">
        <h1>Trousers</h1>
            <button className="pre-btn" onClick={prevbtn2press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn2press}><p>&gt;</p></button>

            <div className="productContainer2">
                {menS3}
            </div>

        </div>

        </div>
       
    )
}
export default PCatMen