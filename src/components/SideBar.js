import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faFilm, faList, faBook, faClockRotateLeft, faPlay, faClock, faChevronDown} from "@fortawesome/free-solid-svg-icons";

function SideBar(){
    return (
        <div className="side-bar-menu-wrapper">
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faHouse} />    Home</p>
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faFilm} />    Shorts</p>
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faList} />    Subscripitons</p>
            </div>
            <p>______________________________</p>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faBook} />    Library</p>      
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faClockRotateLeft} />    History</p>
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faPlay} />    Your Videos</p>
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faFilm} />    Your Movies</p>        
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faClock} />    Watch Later</p>
            </div>
            <div className="side-bar-menu-option">
                <p className="side-bar-menu-option"> <FontAwesomeIcon icon={faChevronDown} />    Show More</p>
            </div>
        </div>
    );
}
export default SideBar;