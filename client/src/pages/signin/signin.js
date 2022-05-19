import React from "react";
import { useState } from "react";
import Navbar from '../../components/Navbar' 

function SigninPage(){
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

    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      // acc[i].addEventListener("click", function() {
      //   this.classList.toggle("active");
      //   var panel = this.nextElementSibling;
      //   if (panel.style.maxHeight) {
      //     panel.style.maxHeight = null;
      //   } else {
      //     panel.style.maxHeight = panel.scrollHeight + "px";
      //   } 
      // });
    }
    
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("scroll-up").style.display = "block";
      } else {
        document.getElementById("navbar").style.top = "-60px";
        document.getElementById("scroll-up").style.display = "none";
      }
    }
    
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    
    var scroll = window.requestAnimationFrame ||
    function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
    function loop() {
    
        Array.prototype.forEach.call(elementsToShow, function(element){
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          } else {
            element.classList.remove('is-visible');
          }
        });
    
        scroll(loop);
    }
    loop();
    
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    
    var myVar;
    function myLoader() {
      myVar = setTimeout(showPage, 3000);
    }
    
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
    
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    // sign_up_btn.addEventListener("click", () => {
    //   container.classList.add("sign-up-mode");
    // });
    
    // sign_in_btn.addEventListener("click", () => {
    //   container.classList.remove("sign-up-mode");
    // });

    return(
        <>
<div>
    <Navbar/>
      <div   className="container">
          <div   className="forms-container">
            <div   className="signin-signup">
              <form action="/login" method="post"   className="sign-up-form">
                <h2   className="title">Sign in</h2>
                <div   className="input-field">
                  <i   className="fas fa-user"></i>
                  <input type="email"   className="input" name="email" required placeholder="EMAIL"  />
                </div>
                <div   className="input-field">
                  <i   className="fas fa-lock"></i>
                  <input type="password"   className="input" name="password" required placeholder="PASSWORD" />
                </div>
                <input type="submit" value="Login"   className="btn solid" />
                <p   className="social-text">Or Sign in with social platforms</p>
                <div   className="social-media">
                    <div className="social-icon"></div>
                    <i   className="fab fa-facebook-f"></i>
                    
                    <div className="social-icon"></div>
                    <i   className="fab fa-twitter"></i>
                    
                    <div className="social-icon"></div>
                    <i   className="fab fa-google"></i>
                    
                    <div className="social-icon"></div>
                    <i   className="fab fa-linkedin-in"></i>
                    
                </div>
              </form>
        
              <form action="/signup" method="post"   className="sign-in-form">
                <h2   className="title">Create an account</h2>
                <div   className="input-field">
                  <i   className="fas fa-user"></i>
                  <input type="text"   className="input" name="name" placeholder="Username" />
                </div>
                <div   className="input-field">
                  <i   className="fas fa-envelope"></i>
                  <input type="email"   className="input" name="email" placeholder="Email" />
                </div>
                <div   className="input-field">
                  <i   className="fas fa-envelope"></i>
                  <input type="text"   className="input" name="cno" required placeholder="CONTACT NUMBER"/>
                </div>
                <div   className="input-field">
                  <i   className="fas fa-lock"></i>
                  <input type="password"   className="input" name="password" required placeholder="PASSWORD"/>
                </div>
                <div   className="input-field">
                  <i   className="fas fa-lock"></i>
                  <input type="password"   className="input" name="cpassword" required placeholder="CONFIRM PASSWORD"/>
                </div>
                <input type="submit"   className="btn" value="Sign up" />
                <p   className="social-text">Or Sign up with social platforms</p>
                <div   className="social-media">
                    <div className="social-icon"></div>
                    <i   className="fab fa-facebook-f"></i>
                    
                    <div className="social-icon"></div>
                    <i   className="fab fa-twitter"></i>
                    
                    <div className="social-icon"></div>
                    <i   className="fab fa-google"></i>
                    
                    <div className="social-icon"></div>
                    <i   className="fab fa-linkedin-in"></i>
                    
                </div>
              </form>
            </div>
          </div>
        
          <div   className="panels-container">
            <div   className="panel left-panel">
              <div   className="content">
                <h3>New here ?</h3>
                <p>
                  Join with us and take yourself for a journey of success.
                </p>
                <button   className="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
              <img src="register.png"   className="image" alt="" />
            </div>
            <div   className="panel right-panel">
              <div   className="content">
                <h3>One of us ?</h3>
                <p>
                  Login and continue your journey of gaining knowledge with us.
                </p>
                <button   className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="register.svg"   className="image" alt="" />
            </div>
          </div>
        </div>
        </div>
</>
)
}

export default SigninPage