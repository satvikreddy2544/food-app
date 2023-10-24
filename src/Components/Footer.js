import React,{useContext} from 'react'
import UserContext from '../Utils/UserContext'

const Footer = () => {

  const {user} = useContext(UserContext);
  return (
    <div style={{display:'flex',justifyContent:"center",color:'red'}}>
      
      <h1>This site is developed by  {user.name} </h1>
    </div>
  )
}

export default Footer
