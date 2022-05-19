import React from "react";
import { useNavigate } from "react-router";
import { Link ,BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function Navbar(){
    const navigate=useNavigate();
    function menutoggle(){
        return
    }
        //src={require("../../assets/images/food.jpg")}
    return(
        <>
        <div  className="navbar">
        <div  className="logo">
        <img src={require("../assets/images/Logo karukalap.png")} width="100px" alt ="gf"/>
            <img src={require("../assets/images/Karukalap (1).png")} width="200px" alt ="gf"/>
        </div>
        <nav>
            <ul id="MenuItems">

                <li onClick={()=> navigate("/home")}>Home</li>
                <li onClick={()=> navigate("/products")}>Products</li>
                <li onClick={()=> navigate("/signin")}>Sign in</li>
                <li onClick={()=> navigate("/about")}>About</li>
            </ul>
        </nav>
        <img src="../assets/images/menu-rounded.png"  className="menu-icon" onClick={menutoggle()} alt ="gf"/> 
    </div>

</>
)
}

export default Navbar