import { Navbar } from '../components/Navbar';
import NavBar2 from "../components/NavBar2";
import "./contact.css";

export const Contact= ()=>{

    return(
        <div>
             <div>{<Navbar />}</div>
             <div>{<NavBar2 />}</div>
            
             <div className="contact">

                <div className="tag-cont-contact">
                    <div className='to-align'>
                        <h3 className="h3 scaleUp">Contact: 9688854265</h3>
                        <h3 className="h3 scaleUp">Mail Id: elankathirskr92@gmail.com</h3>
                        <h3 className="h3 scaleUp">Git Id: elankathir1270</h3>
                    </div>
                   

                </div>
               </div> 
        </div>
       
    );
    
    
}