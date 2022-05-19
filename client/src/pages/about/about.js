import React from "react";
import { useState } from "react";
import Navbar from '../../components/Navbar' 

function AboutPage(){
    const {details,setDetails} = useState({
        firstName : "",
        lastName : "",
        contact: "",
        email: "",
        purchaseOrders:[]
    })

    function menutoggle(){
        return
    }

    return(
        <>
        <Navbar/>
<div></div>

</>
)
}

export default AboutPage