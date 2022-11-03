import React from "react";
import logo from "./assets/logo.jpg";
import {Segment, Header} from 'semantic-ui-react';

const Nav = () => {
	return (
        <div>
            <Segment inverted vertical >
                <Header as="h2" >A Travel Guide to Frank Lloyd Wright Homes</Header>
                <img src={logo} alt="" /> 
            </Segment>
        </div>
	);
};

export default Nav;

// color=#e3b270