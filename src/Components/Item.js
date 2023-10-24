import { Link, useParams } from "react-router-dom";
import useItem from "../Utils/useItem";
import useSingleResto from "../Utils/useSingleResto";
import { useState } from "react";
import { IMAGE_CDN_URL } from "../Utils/utils";
import '../Styles/item.css'
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const Item=()=>{
    
   const params=useParams();
   const dispatch=useDispatch();
   const id=params.id;
   const itemId=params.id2;
   const restaurant=useSingleResto(id);
   const cards=restaurant?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;
  const restaurantInfo=restaurant?.data?.cards[0]?.card?.card?.info;
  console.log(restaurantInfo)
  
  
  let items=null;
  if(cards){
     items=cards[1].card.card.itemCards;
      console.log(items) 
  }
  
  console.log(items)
  let myItem
  if(items!=null) {

    console.log("items found" , items);
    items.map((item)=>{

        if(item.card.info.id == itemId) {
            console.log("item found",item);
            myItem=item;
        }
    })
  }
  else console.log("null");

  const handleAddItem=(item)=>{

    dispatch(addItem(item))
  }

  return <div>

        {!myItem? null : 
        <ul className="menuItem">
            <li><img alt="item image" className="item-img" src={IMAGE_CDN_URL + myItem.card.info?.imageId }/></li>
            <li>{myItem.card.info.name}</li>
           <li>{myItem.card.info.category}</li> 
           <li>{myItem.card.info.description}</li> 
           <li>RS.{ myItem.card.info.price/100}.00</li>
           <Link to={"/cart"}><button onClick={()=>handleAddItem(myItem)}>Order Now</button></Link>
        </ul> 
        }
  </div>

}

export default Item;