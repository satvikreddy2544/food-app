import React from 'react'
import '../Styles/RestCard.css'
import { IMAGE_CDN_URL } from '../Utils/utils'





function RestCard({rest}) {
  return (
    
    <div className='restoCard'>
       <img src={IMAGE_CDN_URL + rest.cloudinaryImageId} alt='image' className='cardImage'/>
       <div className='disc'>
       <h3>{rest.name}</h3>
       <h4>{rest.avgRating}</h4>
       <p >{rest.cuisines[0]+ "," + rest.cuisines[1]}</p>
       <p>{rest.areaName}</p>
       
       {/* <a href={rest.action.link} target='/blank'>More items </a>
       <p>{rest.accessibility.altTextCta}</p> */}
       </div>
       
    </div>
   
    
  )
}


export default RestCard
