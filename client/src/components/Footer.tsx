import React from 'react'

import { FooterComponent } from '../styles/footer';
import logo from "../media/footer_icon.gif";

const Footer = () => {
    return (
        <FooterComponent>
            <img src={logo} alt="..." />
            <span>
                "Why should I apologize for being a monster? <br /> Has anyone ever apologized for turning me into one?"
                <p style={{ marginTop: "2rem" }}>- Juuzou Suzuya</p>
            </span>
        </FooterComponent>
    )
}

export default Footer;
