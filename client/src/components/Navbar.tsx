import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom';


import { AuthContext } from '../context/authContext';

import { NavbarContainer, NavbarLogo, NavbarLinks, NavbarWrite, NavbarSpan } from "../styles/navbar";
import logo from "../media/ghost.png";

const Navbar: FunctionComponent = () => {
    const { currentUser, logout } = useContext(AuthContext);

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
                <NavbarSpan>{currentUser?.username}</NavbarSpan>
                {currentUser ? (
                    <NavbarSpan onClick={logout}>Logout</NavbarSpan>
                ) : (
                    <Link className="link" to="/login">
                        <h6>Login</h6>
                    </Link>
                )}
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