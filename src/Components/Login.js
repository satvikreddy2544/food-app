import { Link } from "react-router-dom";
import "../Styles/Login.css";
import Body from "./body";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Utils/UserContext";
import Index from "..";
const Login = () => {
  

  
const {user,setUser} = useContext(UserContext);
  

  return (
    <div className="container">
      

      <div className="form">
        <h1>Sign In</h1>
        <div className="form-name">
          <div className="first-name">
            <input type="text" placeholder="First Name" name="name" value={user.name} 
                onChange={e => setUser({
                    name:e.target.value
                })}
            />
          </div>
          
        </div>
        <div className="email">
          <input type="email" placeholder="Email" name="email" 
           />
        </div>
        <div className="password">
          <input type="password" placeholder="Password" name="password" value={user.password} 
            onChange={e => setUser({
                password:e.target.value
            })}
          />
        </div>
        <div className="confirm password">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="form-btn">
          <Link to={"/"}>
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
