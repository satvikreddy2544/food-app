import React, { useEffect, useState } from "react";
import RestCard from "./RestCard";
import "../Styles/body.css";
import { restList } from "../Utils/utils";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import { FETCH_DATA_URL } from "../Utils/utils";
import useIsOnline from "../Utils/useIsOnline"
import useSingleResto from "../Utils/useSingleResto";


const NoSearchFound = () => {
  
  return (
    <>
      <h3 className="noData"> No Search Data Found</h3>
    </>
  );
};
const Body = () => {
  
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline=useIsOnline();

  if(!isOnline){
    return <h1>Seems UR Offline, please check internet connection</h1>
  }

  async function getRestaurants() {
    const data = await fetch(FETCH_DATA_URL);
    const jsonData = await data.json();
    console.log(jsonData);
    const fd = jsonData?.data.cards;
    const len = fd.length;
    const newFd = fd[len - 8]?.card?.card;
    const finalData = newFd?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurants(finalData);
    setFilteredRestaurants(finalData);
  }

  const searchBtnStyle={
      background:"green",
  };

  
  
  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          // style={searchBtnStyle}
          onClick={(e) =>
            setFilteredRestaurants(filterData(allRestaurants, searchText))
          }
        >
          Search
        </button>
      </div>

      <div className="cards">
        {filteredRestaurants.length == 0 ? (
          <NoSearchFound />
        ) : (
          filteredRestaurants.map((rest) => {
            return (
              <Link to={"/resto/" + rest?.info?.id} key={rest?.info?.id}>
                <RestCard rest={rest?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
        
};

export default Body;
