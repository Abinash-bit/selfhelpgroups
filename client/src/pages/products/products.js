import React from "react";
import { useState } from "react";
import Navbar from '../../components/Navbar' 

function ProductsPage(){
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
            <h2>All Products</h2>
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
                <img src={require("../../assets/images/Handicrafts.jpg")} alt=""/>
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
                <img src={require("../../assets/images/shoes.jpg")} alt=""/>
                <h4>Shoes</h4>
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
                <img src={require("../../assets/images/ricket bats.jpg")} alt=""/>
                <h4>Cricket Bats</h4>
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
            <img src={require("../../assets/images/puppets.jpg")} alt=""/>
            <h4>puppets</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>         
            </div>
            <p>Net Worth: $50.00</p>
        </div>
        <div class="row">
            <div class="col-4">
                <img src={require("../../assets/images/place holdesr.jpg")} alt=""/>
                <h4>holders</h4>
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
                <img src={require("../../assets/images/painting 2.jpg")} alt=""/>
                <h4>Paintings</h4>
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
                <img src={require("../../assets/images/painting 1.jpg")} alt=""/>
                <h4>paintings</h4>
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
            <img src={require("../../assets/images/matkas.jpg")} alt=""/>
            <h4>Matkas</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>         
            </div>
            <p>Net Worth: $50.00</p>
        </div>
        <div class="row">
            <div class="col-4">
                <img src={require("../../assets/images/handmadedustbins.jpg")} alt=""/>
                <h4>dustbins</h4>
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
                <img src={require("../../assets/images/handmade robots.jpg")} alt=""/>
                <h4>Robots</h4>
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
                <img src={require("../../assets/images/dresses.jpg")} alt=""/>
                <h4>Kurti</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>         
                </div>
                <p>Net Worth: $35.00</p>
            </div>
        <div class="col-4">
            <img src={require("../../assets/images/crafts 1.jpg")} alt=""/>
            <h4>Bowls</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>         
            </div>
            <p>Net Worth: $25.00</p>
        </div>
    </div>
    <div class="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>
</div>
</div>
</>
)
}

export default ProductsPage