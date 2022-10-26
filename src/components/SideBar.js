import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faFilm, faList, faBook, faClockRotateLeft, faPlay, faClock, faChevronDown} from "@fortawesome/free-solid-svg-icons";

function SideBar(){
    return (
        <div className="side-bar-menu-wrapper">
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faHouse} />  Home</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faFilm} />  Shorts</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faList} />  Subscripitons</p>
            <br></br>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faBook} />  Library</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faClockRotateLeft} />  History</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faPlay} />  Your Videos</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faFilm} />  Your Movies</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faClock} />  Watch Later</p>
            <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faChevronDown} />  Show More</p>
        </div>
    );
}
export default SideBar;