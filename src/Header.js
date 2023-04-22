import React from "react";
import flwPattern from "../src/assets/flw_pattern.jpg";






const Header = () => {
	return (
        <div >
            <div className="headerSegment" >
                <img id="flwPattern" src={flwPattern} alt="" />
                <h2 className="headerText" >Frank Lloyd Wright Travel Journal</h2> 
            </div>
        </div>
	);
};

export default Header;

// color=#e3b270