import React, { useState } from "react";
import getURL from "../../utils/linkProv";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function LogInPage() {
    const [user, setUser] = useState({
        emailId: "",
        password: "",
    });
    const [email, setEmail] = useState();
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        //console.log(name);

        setUser({ ...user, [name]: value });
        //console.log(user);
    };
    const responseGoogle = async (response) => {
        const url = getURL(window.location.hostname);
        // console.log("this is my url",);
        // console.log(response.su);
        // console.log(response.tokenId);
        const res = await fetch(`${url}/auth/googleSignin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tokenId: response.tokenId,
            }),
        });
        const data = await res.json();
        console.log(res.status);
        if (res.status === 201) {
            alert({
                title: "Login failed!!!",
                text: "You haven't created the account , Please register first.",
                icon: "error",
                button: "Register here",
            });
            //console.log("registration successful");
            navigate("/register");
        } else if (res.status === 200) {
            alert({
                title: "Good job!",
                text: "You have been logged in successfully",
                icon: "success",
                button: "Continue",
            });
            navigate("/profile");
            localStorage.setItem("Authorization-Token", data.token);
        } else {
            alert({
                title: "Error Occured!!!",
                text: "Not able to register your account",
                icon: "error",
                button: "Continue",
            });
            navigate("/");
        }
    };
    const forgotPassword = async (e) => {
        e.preventDefault();
        const url = getURL(window.location.hostname);
        await fetch(`${url}/auth/recover`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
            }),
        }).then(async (res) => {
            const data = await res.json();
            if (res.status === 200) {
                alert({
                    title: "Good job!",
                    text: `${data.message}`,
                    icon: "success",
                    button: "Continue",
                });
            } else {
                alert({
                    title: "Error Occured",
                    text: `${data.message}`,
                    icon: "error",
                    button: "Continue",
                });
            }
        });
    };
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        // console.log(profile);
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { emailId, password } = user;
        console.log(emailId, password);
        const url = getURL(window.location.hostname);
        const res = await fetch(`${url}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailId,
                password,
            }),
        });
        // //console.log(res);
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            alert({
                title: "Good job!",
                text: "You have logged in successfully",
                icon: "success",
                button: "Continue",
            });
            if (data.user.role === "admin") {
                navigate("/admin/AllCampaigns");
            } else {
                navigate("/profile");
            }
            localStorage.setItem("Authorization-Token", data.token);
        } else if (res.status === 401 || res.status === 500) {
            navigate("/login");
            alert({
                title: "Error Occured",
                text: `${data.message}`,
                icon: "error",
                button: "Continue",
            });
        } else {
            navigate("/login");
            alert({
                title: "Error Occured",
                text: "Please provide email and password",
                icon: "error",
                button: "Continue",
            });
        }
    };

    return (
        <>
            <div>
                <Navbar />

                    <div>
                        <div
                            className={modal ? "forgot__modal" : "none"}
                            onClick={() => setModal(false)}
                        >
                            <div
                                className="modal"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h1>Forgot Password ?</h1>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />{" "}
                                <br />
                                <button onClick={forgotPassword}>
                                    Send Email
                                </button>
                            </div>
                        </div>
                        <div class="login__page">
                            <div class="right__content">
                                <div class="content__text">
                                    {/* <h1 class="thin__text">Some Text</h1> */}
                                    <h1>IndiaCares</h1>
                                    <p>Fundraising for the cause we care</p>
                                </div>
                            </div>
                            <div class="left__content">
                                <div class="title">
                                    <h1>Login</h1>
                                </div>
                                <div class="signin__options">
                                    {/* <div class="login__google"> */}
                                    {/* <img src={require('../../Images/image 2.png').default} alt=""/> */}
                                    
                                    {/* </div> */}
                                    {/* <div class="login__facebook">
                        <img src={require('../../Images/image 3.png').default} alt=""/>
                        <p>Continue with Facebook</p>
                    </div> */}
                                </div>
                                <div class="or">- OR -</div>
                                <form action="POST" className="login__form">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="emailId"
                                        value={user.emailId}
                                        onChange={handleInputs}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInputs}
                                    />
                                    <p
                                        className="forgot__password"
                                        onClick={() => setModal(true)}
                                    >
                                        Did you Forgot your Password?
                                    </p>
                                    <button type="submit" onClick={PostData}>
                                        Login
                                    </button>
                                </form>
                                <p class="no__account">
                                    {" "}
                                    Don't have an account?{" "}
                                    <Link to="/register">Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default LogInPage;