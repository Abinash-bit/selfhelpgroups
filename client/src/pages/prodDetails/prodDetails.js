import React from "react";
import { useState } from "react";
import Navbar from '../../components/Navbar' 

function ProductDetailsPage(){
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
 
        <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="/images/Blind music.jpg"/>
                        <div>
                            <p>Printed tshirt</p>
                            <small>Price: $50</small>
                            <a  >Remove</a>
                        </div>
                    </div>
                </td>
                <td Input type="number" value="1"></td>
                <td>$50</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="/images/Blind music.jpg"/>
                        <div>
                            <p>Printed tshirt</p>
                            <small>Price: $50</small>
                            <a  >Remove</a>
                        </div>
                    </div>
                </td>
                <td input type="number" value="1"></td>
                <td>$50</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="/images/Blind music.jpg"/>
                        <div>
                            <p>Printed tshirt</p>
                            <small>Price: $50</small>
                            <a  >Remove</a>
                        </div>
                    </div>
                </td>
                <td Input type="number" value="1"></td>
                <td>$50</td>
            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$50.00</td>
                </tr>
            </table>
        </div>
    </div>
</>
)
}

export default ProductDetailsPage