import React, { useEffect, useState } from 'react'

const useSingleResto = (id) => {
    
    const[singleRest,setSingleREst]=useState({});
    useEffect(()=>{
        getRestaurant();
    },[])

   async function getRestaurant(){
        const restaurantData=await fetch(" https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+id
        );

        const jsonData=await restaurantData.json();
        // const rests=jsonData.data.cards[2].card.card.gridElements.infoWithStyles.restaurants;
        // console.log("jsonData" + rests.data.cards);
        setSingleREst(jsonData);
        
        // const items=jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards;
        // console.log(jsonData.data.cards[0].card.card.info);
        // console.log(singleRest);
        
        // setSingleREst(items);
        setSingleREst(jsonData);
        
        

    }
    return singleRest;
   
    
  
}

export default useSingleResto
