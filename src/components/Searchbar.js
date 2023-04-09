import { React, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css";



function Searchbar({data,placeholder}) {

    const[filterData, setFilterData] = useState([]);
    const[wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)

        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord === 0) {
            setFilterData([])
        }
        else{
            setFilterData(newFilter)
        }
        
    }

    const clearInput = () => {
        setFilterData([]);
        setWordEntered("");

    }
 
    return(
        <div className="searchbar">
            <div className="searchInput">
                 <input className="inputField" type="text"
                 placeholder= {placeholder}
                 onChange={handleFilter}
                 onClick={()=>setFilterData(data)}
                 value={wordEntered}

                 />
                 <div className="searchIcon">
                    {filterData.length === 0 ? (<SearchIcon />) :
                    (<p className="clearBtn" onClick={clearInput}>X</p>)
                    }
                    
                 </div>
            </div>

            {filterData.length !== 0 && (
                 <div className="dataResult">
                    {filterData.map((value,index) => {
                   return <a
                          className="dataItem"
                          key={index}
                          href={value.link}  
                          >
                            <p className="dataItem-text">{value.name}</p>
                          </a>
                    })}
                  

                 </div>
            )}
           
           
          
        </div>
    )
}
export default Searchbar;