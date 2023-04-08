import {React} from "react"
import { Navbar } from "../components/Navbar"
import NavBar2 from "../components/NavBar2";
import PCacWomen from "./PCacWomen"

const AcForWomen = ()=>{



    return(
        <div>
           <div>{<Navbar />}</div>
           <div>{<NavBar2 />}</div>
           
            <div id="ac-for-women">
                <PCacWomen />
            </div>

        </div>
    )
}
export default AcForWomen