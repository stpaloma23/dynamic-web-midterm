import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faMicrophone, faBell, faMagnifyingGlass, faVideo, faUser} from "@fortawesome/free-solid-svg-icons";
import youtubeLogo from "../images/youtube_logo.png";

function Header({setSearchInput}){

    function getChannelName(){
        var input = document.getElementById("channelSearchInput");
        setSearchInput(input.value);
    }

    return (
        <header>
            <div className="left-parts">
                <FontAwesomeIcon icon={faBars} className="icons"/>
                <img src={youtubeLogo} className="youtube-logo" alt="youtube logo"></img>
            </div>
            <div className="middle-parts">
                <div className="search-box">
                    <input type="text" id="channelSearchInput" name="channelSearchInput"></input>
                    <button onClick={getChannelName} type="button" className="search-button" id="searchButton">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icons"/>
                    </button>
                </div>
                <FontAwesomeIcon icon={faMicrophone} className="icons"/>

            </div>
            <div className="right-parts">
                <FontAwesomeIcon icon={faBell} className="icons"/>
                <FontAwesomeIcon icon={faVideo} className="icons"/>
                <div className="profile-photo">
                    <FontAwesomeIcon icon={faUser} className="icons"/>
                </div>
            </div>
        </header>
    );
}
export default Header;