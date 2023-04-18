import React from "react";
import flwPattern from "../src/assets/flw_pattern.jpg"





const Header = () => {
	return (
        <div >
            <div className="headerSegment" >
                <img src={flwPattern} />
                <h2 className="headerText" >A Journal of Frank Lloyd Wright Homes</h2> 
            </div>
        </div>
	);
};

export default Header;

// color=#e3b270