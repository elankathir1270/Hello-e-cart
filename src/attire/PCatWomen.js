import { React } from "react";
import "./ProductCarousel.css"
import ProductCard from "../components/ProductCard";

const PCatWomen = () => {

    let box = document.querySelector(".productContainer")
    const prevbtnpress = () => {
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const nextbtnpress = () => {
        const width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

    let box1 = document.querySelector(".productContainer1")
    const prevbtn1press = () => {
        const width = box1.clientWidth;
        box1.scrollLeft = box1.scrollLeft - width;
    }

    const nextbtn1press = () => {
        const width = box1.clientWidth;
        box1.scrollLeft = box1.scrollLeft + width;
    }

    let box2 = document.querySelector(".productContainer2")
    const prevbtn2press = () => {
        const width = box2.clientWidth;
        box2.scrollLeft = box2.scrollLeft - width;
    }

    const nextbtn2press = () => {
        const width = box2.clientWidth;
        box2.scrollLeft = box2.scrollLeft + width;
    }


    const wSarees = [
    
        { id:1, image: "./wsarees/sr1.jpg", prize: "1100", name: "Saree"},
        { id:2, image: "./wsarees/sr2.jpg", prize: "1400", name: "Saree"},
        { id:3, image:  "./wsarees/sr3.jpg", prize: "1290", name: "Saree"},
        { id:4, image:  "./wsarees/sr4.webp", prize: "1500", name: "Saree"},
        { id:5, image:  "./wsarees/sr5.webp", prize: "1400", name: "Saree"},
        { id:6, image:  "./wsarees/sr6.jpg", prize: "1200", name: "Saree"},
        { id:7, image:  "./wsarees/sr7.jpg", prize: "1200", name: "Saree"},
        { id:8, image:  "./wsarees/sr8.jpeg", prize: "1400", name: "Saree"},
        { id:9, image:  "./wsarees/sr9.jpg", prize: "1400", name: "Saree"},
        { id:10, image:  "./wsarees/sr10.webp", prize: "1250", name: "Saree"},
        
    ]

    const womenS3 = wSarees.map((items) => {
        return <ProductCard 
        image= {items.image} prize= {items.prize} name= {items.name} />
    })

    const wSkirts = [
    
        { id:1, image: "./wskirts/s1.jpg", prize: "900", name: "Skirt"},
        { id:2, image: "./wskirts/s2.jpg", prize: "600", name: "Skirt"},
        { id:3, image:  "./wskirts/s3.webp", prize: "890", name: "Skirt"},
        { id:4, image:  "./wskirts/s4.webp", prize: "999", name: "Skirt"},
        { id:5, image:  "./wskirts/s5.webp", prize: "899", name: "Skirt"},
        { id:6, image:  "./wskirts/s6.webp", prize: "560", name: "Pant"},
        { id:7, image:  "./wskirts/s7.webp", prize: "650", name: "Pant"},
        { id:8, image:  "./wskirts/s8.webp", prize: "999", name: "Pant"},
        { id:9, image:  "./wskirts/s9.webp", prize: "1100", name: "Pant"},
        { id:10, image:  "./wskirts/s10.webp", prize: "890", name: "Pant"},
        
    ]

    const womenS2 = wSkirts.map((items) => {
        return <ProductCard 
        image= {items.image} prize= {items.prize} name= {items.name} />
    })

    const wTops = [
    
        { id:1, image: "./wtop/t1.webp", prize: "700", name: "Top"},
        { id:2, image: "./wtop/t2.webp", prize: "600", name: "Top"},
        { id:3, image:  "./wtop/t3.webp", prize: "890", name: "Top"},
        { id:4, image:  "./wtop/t4.jpg", prize: "1100", name: "Top"},
        { id:5, image:  "./wtop/t5.jpg", prize: "999", name: "Top"},
        { id:6, image:  "./wtop/t6.jpeg", prize: "1200", name: "Top"},
        { id:7, image:  "./wtop/t7.webp", prize: "900", name: "Top"},
        { id:8, image:  "./wtop/t8.jpg", prize: "999", name: "Top"},
        { id:9, image:  "./wtop/t10.jpg", prize: "1100", name: "Top"},
        { id:10, image:  "./wtop/t11.jpg", prize: "1200", name: "Top"},
        
    ]

    const womenS1 = wTops.map((items) => {
        return <ProductCard 
        image= {items.image} prize= {items.prize} name= {items.name} />
    })

    return(

        <div>
        <div className="ProductCarousel">
            <h1>Tops</h1>
            <button className="pre-btn" onClick={prevbtnpress}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtnpress}><p>&gt;</p></button>

            <div className="productContainer">
                {womenS1}
            </div>

        </div>

        <div className="ProductCarousel">
            <h1>Skirts & Pants</h1>
            <button className="pre-btn" onClick={prevbtn1press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn1press}><p>&gt;</p></button>

            <div className="productContainer1">
                {womenS2}
            </div>

        </div>

        <div className="ProductCarousel">
            <h1>Sarees</h1>
            <button className="pre-btn" onClick={prevbtn2press}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextbtn2press}><p>&gt;</p></button>

            <div className="productContainer2">
                {womenS3}
            </div>

        </div>

        </div>
       


    )
}
export default PCatWomen;