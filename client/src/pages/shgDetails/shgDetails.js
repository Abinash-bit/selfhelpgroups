import React from "react";
import { useState } from "react";
import Navbar from '../../components/Navbar' 

function ShgDetailsPage(){
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
        <div class="small-container">

        <div class="row row-2">
            <h2>Popular Crafts</h2>
            <select>
                <option>Default sorting</option>
                <option>Sort by Price</option>
                <option>sort by popularity</option>
                <option>Sort by rating</option>
                <option>Sort by Sale</option>
            </select>
        </div>


        <div class="row">
            <div class="col-4">
                <img src="/images/crafts 22.jpg"/>
                <h4>Ramnarayan Krafts</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>         
                </div>
                <p>Net Worth: $50.00</p>
            </div>
            <div class="col-4">
                <img src="crafts 23.jpg"/>
                <h4>Crafts</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>         
                </div>
                <p>Net Worth: $50.00</p>
            </div>
            <div class="col-4">
                <img src="crafts11.jpg"/>
                <h4>Crafts</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>         
                </div>
                <p>Net Worth: $50.00</p>
            </div>
        <div class="col-4">
            <img src="Maps.jpg"/>
            <h4>Connect Us</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>         
            </div>
            <p>Net Worth: $50.00</p>
        </div>
    </div>
</div>
</>
)
}

export default ShgDetailsPage