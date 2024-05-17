import React from "react";
import "./header.css";
import Slider from "../Slider"
 
const Header = () => {
    return (
        <>
            <div style={{ maxWidth: "75%", margin: "0 auto" }} className="container">
                <header style={{zIndex:"999"}} >
                    <div className="navbar">
                        <div className="logo">
                            <a style={{ border: "2px solid white", padding: "5px" }} href="">Tasty</a>
                        </div>
                        <div className="links">
                            <ul style={{ display: "flex", gap: "30px", listStyleType: "none" }} >
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Menu</a>
                                </li>
                                <li>
                                    <a href="#">Specialties</a>
                                </li>
                                <li>
                                    <a href="#">Reservation</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            <main>
                <section>
                    <Slider />
                </section>
            </main>
        </>
    );
};

export default Header;
