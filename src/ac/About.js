import { Navbar } from '../components/Navbar';
import NavBar2 from "../components/NavBar2";
import "./contact.css";

export const About= ()=>{

    return(
        <div>
             <div>{<Navbar />}</div>
             <div>{<NavBar2 />}</div>
             <div className="contact">

            <div className="tag-cont-contact">
                <div className='to-align'>
                    <h3 className="h3 scaleUp">Contact: 9688854265</h3>
                   
            </div>
   

</div>
</div> 
        </div>
       
    );
    
    
}