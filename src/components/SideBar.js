import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from "@fortawesome/free-solid-svg-icons";

function SideBar(){
    return (
        <div className="side-bar-menu-wrapper">
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faHouse} />Home</p>
            <p className="side-bar-menu-option">Shorts</p>
            <p className="side-bar-menu-option">Subscripitons</p>
            <br></br>
            <p className="side-bar-menu-option">Library</p>
            <p className="side-bar-menu-option">History</p>
            <p className="side-bar-menu-option">Your Videos</p>
            <p className="side-bar-menu-option">Your Movies</p>
            <p className="side-bar-menu-option">Watch Later</p>
            <p className="side-bar-menu-option">Show More</p>
        </div>
    );
}
export default SideBar;