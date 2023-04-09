import {React} from "react"
import { Navbar } from "../components/Navbar"
import NavBar2 from "../components/NavBar2";
import "./interior.css"

const DecorThings = ()=>{



    return(
        <div>
           <div>{<Navbar />}</div>
           <div>{<NavBar2 />}</div>
          
           <div className="interior">
                <div className="tag-cont">
                    <h1 className="h1 fromTop" >HELLO!</h1>
                    <h3 className="h3 scaleUp">It's comming soon</h3>

                </div>
            </div>

        </div>
    )
}
export default DecorThings