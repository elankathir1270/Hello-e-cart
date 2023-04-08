import {React} from "react"
import { Navbar } from "../components/Navbar"
import PCatWomen from "./PCatWomen"
import NavBar2 from "../components/NavBar2"

const AtForWomen = ()=>{



    return(
        <div>
           <div>{<Navbar />}</div>
           <div>{<NavBar2 />}</div>
          
            <div id="at-for-women">
                <PCatWomen />
            </div>

        </div>
    )
}
export default AtForWomen