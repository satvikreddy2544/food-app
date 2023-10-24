import { useState,useEffect } from "react";
import { FETCH_DATA_URL } from "./utils";

const useAllRestaurants=()=>{

    const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(FETCH_DATA_URL);
    const jsonData = await data.json();
    // console.log(jsonData)
    const fd = jsonData?.data.cards;
    const len = fd.length;
    const newFd = fd[len - 8]?.card?.card;
    const finalData = newFd?.gridElements?.infoWithStyle?.restaurants;

    setRestaurant(finalData);
  }

  return restaurant;

}

export default useAllRestaurants;