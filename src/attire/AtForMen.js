import {React} from "react"
import { Navbar } from "../components/Navbar"
import  PCatMen from "./PCatMen"
import NavBar2 from "../components/NavBar2"

const AtForMen = ()=>{

    return(
        <div id="mens-wear">
           <div>{<Navbar />}</div>
           <div>{<NavBar2 />}</div>
            <div >
               <PCatMen />
              
            </div>
        

        </div>
    )
}
export default AtForMen