import React from "react";
import logo from "./assets/logo.jpg";
import {Segment} from 'semantic-ui-react';

const Nav = () => {
	return (
		<Segment>
            <h1>A Travel Guide to Frank Lloyd Wright Homes</h1>
            <img src={logo} alt="" /> 
		</Segment>
	);
};

export default Nav;