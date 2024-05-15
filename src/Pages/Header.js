import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css"

const Header = () =>{
    return (
        <div className="header-div">
            <span>Blog Post Application</span>
            <div className="links"><a className="links" href="/new-blog" >Create New Blog</a>
            <a className="links" href="/view-blog" >View Blog</a> </div>
            
        </div>
    )
}
export default Header;