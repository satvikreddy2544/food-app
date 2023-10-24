import { useState } from "react"
import { useParams } from "react-router-dom"
import useSingleResto from "./useSingleResto"
const useItem=(itemId,restoMenu)=>{

    const [item,setItem]=useState({})
    
    restoMenu.map((item)=>{

        if(item.id == itemId) setItem(item);
    })
    return item;
  
    

    

    
       



}

export default useItem;