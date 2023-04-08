import { useState } from "react";
import { increment,decrement,incrementByAmount,reset } from '../reducers/counterReducer'
import { useDispatch,useSelector } from "react-redux";
import { Navbar } from '../components/Navbar';
import NavBar2 from "../components/NavBar2"

export const Cart=() => {
    const[valuee,setValue]= useState(0)

    const dispatch = useDispatch();
    const counter = useSelector((state)=> state.counter.value);

    return(
        <div>
             <div>{<Navbar />}</div>
             <div>{<NavBar2 />}</div>
            <h3>
                {counter}
            </h3> 
                <input type="number" onChange={(state)=> setValue(state.target.value)} />

                <button onClick={()=> {
                    dispatch(incrementByAmount(parseInt(valuee)))
                }}>Add By Amount</button>

                <button onClick={()=>
                    dispatch(increment())
                }>Increment</button>

                <button onClick={()=> {
                    dispatch(decrement())
                }}>Decrement</button>

                <button onClick={()=> {
                    dispatch(reset())
                }}>Reset</button>
          
        </div>
    );
}