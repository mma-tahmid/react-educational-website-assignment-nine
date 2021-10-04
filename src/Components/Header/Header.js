import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (


        <nav>

            <NavLink className="header-link" activeStyle={activeStyle} to="/home">Home|</NavLink>

            <NavLink className="header-link"

                activeStyle={activeStyle}


                to="/services">Services|</NavLink>

            <NavLink className="header-link" activeStyle={activeStyle} to="/about">About|</NavLink>

            <NavLink className="header-link" activeStyle={activeStyle} to="/instructorDetails">Instructor-Details </NavLink>




        </nav>

    );
};

export default Header;