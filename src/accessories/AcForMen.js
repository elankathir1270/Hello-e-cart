import {React} from "react"
import { Navbar } from "../components/Navbar"
import NavBar2 from "../components/NavBar2";
import PCacMen from "./PCacMen"
import "./ProductCarousel.css"

const AcForMen = ()=>{



    return(
        <div>
           <div>{<Navbar />}</div>
           <div>{<NavBar2 />}</div>
            <div id="ac-for-men">
                
                <PCacMen />
                
            </div>
        

        </div>
    )
}
export default AcForMen