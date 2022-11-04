import React from "react";
import logo from "./assets/logo.jpg";
// import {Segment ,Header, Image} from 'semantic-ui-react';


//should h2 be a span?
const Nav = () => {
	return (
        <div >
            <div class="navSegment" >
                <h2 >A Travel Guide to Frank Lloyd Wright Homes</h2> 
                <img src={logo} alt="" class="navLogo"/> 
            </div>
        </div>
	);
};

export default Nav;

// color=#e3b270