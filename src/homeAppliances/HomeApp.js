import {React} from "react"
import { Navbar } from "../components/Navbar"

const HomeApp = ()=>{



    return(
        <div>
           <div>{<Navbar />}</div>
          
            <div id="home-app">
                home appliances
            </div>

        </div>
    )
}
export default HomeApp