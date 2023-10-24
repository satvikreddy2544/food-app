import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL, hotelMenu } from "../Utils/utils";
import "../Styles/RestoMenu.css";
import { Link } from "react-router-dom";
import useRestautant from "../Utils/useRestaurant";
import useSingleResto from "../Utils/useSingleResto";
import Shimmer from "./Shimmer";
import Item from "./Item";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const RestoMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurant = useSingleResto(id);

  const cards =
    restaurant?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;
  const restaurantInfo = restaurant?.data?.cards[0]?.card?.card?.info;
  console.log(restaurantInfo);

  let items = null;
  if (cards) {
    items = cards[1].card.card.itemCards;
    console.log(items);
  }
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-head">
        <img
          className="menu-img"
          src={IMAGE_CDN_URL + restaurantInfo?.cloudinaryImageId}
        />
        <div className="menu-disc">
          <h1>{restaurantInfo?.name}</h1>
          <h4>{restaurantInfo?.areaName}</h4>
          <h4>Cost For Two :{restaurantInfo?.costForTwo}</h4>
          <h4>{restaurantInfo?.cuisines?.join(",")}</h4>
        </div>
      </div>
      <div className="menu-items">
        <h1>Menu :</h1>
        <ul className="list-items">
          {!items
            ? null
            : items.map((item, index) => {
                return (
                  <div className="list-items-li" key={item.card.info.id}>
                    <Link to={"/item/" + id + "/" + item.card.info.id}>
                      <li> {item.card.info.name}</li>
                    </Link>
                    <p>{item.card.info.itemBadge.name}</p>
                    <button onClick={(e) => handleAddItems(item)}>Add</button>
                  </div>
                );
              })}
        </ul>
      </div>
      <div className="btn">
        <Link to={"/"}>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default RestoMenu;
