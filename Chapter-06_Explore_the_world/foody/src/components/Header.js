import { useState } from "react";
 const loggedInUser=()=>{
  return false;
 }
 const Title = () => {
    return (
      <a href="/" >
        <img className="logo" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logd" />
      </a>
    )
  }
const Header = () => {
  const[isLoggedIn, setIsLoggedIn]= useState(false);
    return (
      <div className="header" >
        <Title />
        <div className="nav-items" >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {
              (isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)} >Logout</button> : <button onClick={()=>setIsLoggedIn(true)} >Login</button>)
            }
      </div>
    )
  }
  export default Header;