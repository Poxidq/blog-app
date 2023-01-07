import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';

import { NavbarContainer, NavbarLogo, NavbarLinks, NavbarWrite } from "../styles/navbar";
import logo from "../media/ghost.png";

const Navbar: FunctionComponent = () => {
    return (
        <NavbarContainer>
            <NavbarLogo>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </NavbarLogo>
            <NavbarLinks>
                <Link className="link" to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                <Link className="link" to="/?cat=science">
                    <h6>SCIENCE</h6>
                </Link>
                <Link className="link" to="/?cat=technology">
                    <h6>TECHNOLOGY</h6>
                </Link>
                <Link className="link" to="/?cat=cinema">
                    <h6>CINEMA</h6>
                </Link>
                <Link className="link" to="/?cat=design">
                    <h6>DESIGN</h6>
                </Link>
                <Link className="link" to="/?cat=food">
                    <h6>FOOD</h6>
                </Link>
                {/* <span>{currentUser?.username}</span>
                    {currentUser ? (
                        <span onClick={logout}>Logout</span>
                    ) : ( */}
                <Link className="link" to="/login">
                    <h6>Login</h6>
                </Link>
                {/* )} */}
                <NavbarWrite>
                    <Link className="link" to="/write">
                        Write
                    </Link>
                </NavbarWrite>
            </NavbarLinks>
        </NavbarContainer>
    )
}

export default Navbar;