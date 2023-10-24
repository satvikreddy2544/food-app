import React, { useState,useContext} from 'react'
import '../Styles/navBar.css'
import { Link } from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import store from '../Utils/store';
import { useSelector } from 'react-redux';




const title=(

    <div className='logo'>
        <img   src="https://th.bing.com/th?id=OIP.a-M3OK_FoGATSbF1PhdUyAAAAA&w=282&h=221&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt='logo'/>
    </div>
    

);

const NavBar = () => {

  const cartItems=useSelector((store)=> store.cart.items);

  const [isLoggedIn,setISLogedIn]=useState(false)

  const {user} = useContext(UserContext);
  return (
    <div className='nav'>
        {title}
        <ul className='listItems'>
           <Link to={"/"}>
            <li>Home</li>
          </Link> 
          <Link to={"/about"}>
            <li>About</li>
          </Link>
           <Link to={"/contact"}>
           <li>Contact</li>
           </Link> 

           <Link to={"/instamart"}>
           <li>
            Instamart
           </li>
           </Link>
            <li style={{color:"red"}}>
              {user.name}
            </li>
           <Link to={"/cart"}> <li style={{border:"1px solid black",height:"30px"}}>
              Cart - {cartItems.length}
            </li></Link>
           <Link to={"/login"}>
            <button>Login</button>
           </Link>

           
            
        </ul>

        
       
        
        
    </div>
  );
};

export default NavBar;
