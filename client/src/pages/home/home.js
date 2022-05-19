import React from "react";
import { useState } from "react";
import Navbar from '../../components/Navbar' 

function HomePage(){
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

            <div  className="header">
                <div  className="container-home">
                    <Navbar/>
                    <div  className="row">
                        <div  className="col-2">
                            <h1>Start by doing what's necessary. then do what's possible. and suddenly you are doing the impossible!!</h1>
                            <div  className="btn">Explore Now</div>
                        </div>
                        <div  className="col-2">
                        <img src={require("../../assets/images/In no time-cuate 1.png")} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
            <div  className="categories">
                <div calss="small-container">
                    <div  className="row">
                        <div  className="col-3">
                            <img src={require("../../assets/images/SHG 6.jpg")} alt =""/>
                        </div>
                        <div  className="col-3">
                            <img src={require("../../assets/images/SHG 4.jpg")} alt =""/>
                        </div>
                        <div  className="col-3">
                            <img src={require("../../assets/images/SHG 5.jpg")} alt =""/>
                        </div>
                    </div>
                </div>  
            </div>
            <div  className="small-container">
                <h2  className="title">Top SHGs</h2>
                <div  className="row">
                    <div  className="col-4">
                        <img src={require("../../assets/images/Handicrafts.jpg")} alt =""/>
                        <h4>Ramnarayan Krafts</h4>
                        <div  className="rating">
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star-o"></i>         
                        </div>
                        <p>Net Worth: $50.00</p>
                    </div>
                    <div  className="col-4">
                        <img src={require("../../assets/images/dress.jpg")} alt =""/>
                        <h4>House of Versace</h4>
                        <div  className="rating">
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star-o"></i>         
                        </div>
                        <p>Net Worth: $50.00</p>
                    </div>
                    <div  className="col-4">
                        <img src={require("../../assets/images/food.jpg")} alt =""/>
                        <h4>Foodly</h4>
                        <div  className="rating">
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star-o"></i>         
                        </div>
                        <p>Net Worth: $50.00</p>
                    </div>
                <div  className="col-4">
                    <img src={require("../../assets/images/Agriculture.jpg")} alt =""/>
                    <h4>Aggregate Agro</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
            </div>
            <h2  className="title">Latest SHGs</h2>
            <div  className="row">
                <div  className="col-4">
                    <img src={require("../../assets/images/Blind music.jpg")} alt =""/>
                    <h4>Andrew nicholls Band</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
                <div  className="col-4">
                    <img src={require("../../assets/images/disable.jpg")} alt =""/>
                    <h4>BOCCIA paralympic</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
                <div  className="col-4">
                    <img src={require("../../assets/images/teaching in villages.jpg")} alt =""/>
                    <h4>E Vidyaloka</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
            </div>
            <div  className="col-4">
                <img src={require("../../assets/images/covid.jpg")} alt =""/>
                <h4>Korona test</h4>
                <div  className="rating">
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star-o"></i>         
                </div>
                <p>Net Worth: $50.00</p>
            </div>
            <div  className="row">
                <div  className="col-4">
                    <img src={require("../../assets/images/orphan.jpg")} alt =""/>
                    <h4>Snehalaya</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
                <div  className="col-4">
                    <img src={require("../../assets/images/Biogas.jpg")} alt =""/>
                    <h4>Biogas Master className</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
                <div  className="col-4">
                    <img src={require("../../assets/images/rail.jpg")} alt =""/>
                    <h4>Perfect kleaning</h4>
                    <div  className="rating">
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star"></i>
                        <i  className="fa fa-star-o"></i>         
                    </div>
                    <p>Net Worth: $50.00</p>
                </div>
            <div  className="col-4">
                <img src={require("../../assets/images/Afforestation.jpg")} alt =""/>
                <h4>Sankalp Taru</h4>
                <div  className="rating">
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star"></i>
                    <i  className="fa fa-star-o"></i>         
                </div>
                <p>Net Worth: $50.00</p>
            </div>
        </div>
        
        
        
        <div  className="testimonial">
            <div  className="small-container">
                <div  className="row">
                    <div  className="col-3">
                        <i  className="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Atque, obcaecati praesentium  eos expedita tempora maxime quo vero corrupti facere dolorem.</p>
                        <div  className="rating">
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star-o"></i>         
                        </div>
                        <img src={require("../../assets/images/Reviews 1.jpg")} alt =""/>
                        <h3>Peter parker</h3>
                    </div>
                    <div  className="col-3">
                        <i  className="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Atque, obcaecati praesentium  eos expedita tempora maxime quo vero corrupti facere dolorem.</p>
                        <div  className="rating">
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star-o"></i>         
                        </div>
                        <img src={require("../../assets/images/Reviews 2.jpg")} alt =""/>
                        <h3>robert</h3>
                    </div>
                    <div  className="col-3">
                        <i  className="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Atque, obcaecati praesentium  eos expedita tempora maxime quo vero corrupti facere dolorem.</p>
                        <div  className="rating">
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star"></i>
                            <i  className="fa fa-star-o"></i>         
                        </div>
                        <img src={require("../../assets/images/Reviews 3.jpg")} alt =""/>
                        <h3>Sean wohler</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>


</>
)
}

export default HomePage