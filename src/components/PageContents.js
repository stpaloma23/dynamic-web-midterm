import { YOUTUBE_API_KEY } from "../API_KEY";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import GetCity from "./GetCity";

function PageContents({channelName = "beyonce"}) {
    const [youtubeViewCount, setViewCount] = useState(0);
    const [subscriberCount, setSubscriberCount] = useState(0);

    useEffect(() => {
        const URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${channelName}&key=${YOUTUBE_API_KEY}`;
        axios
            .get(URL)
            .then( function(response) {
                setViewCount(response.data.items[0].statistics.viewCount);
                setSubscriberCount(response.data.items[0].statistics.subscriberCount);

            })
            .catch(function(error){
                console.warn(error);
            })
    }, [channelName]);

    return(
        <div className="page-contents-wrapper">
            <div className="channel-header">
                <h1>{channelName} has a total of {parseInt(youtubeViewCount).toLocaleString()} views</h1>
                <h2><GetCity viewCount={youtubeViewCount}/></h2>
            </div>
            <div className="channel-username">
                <div className="channel-username-topstuff">
                    <div className="channel-username-topstuff-leftside">
                        <div className="profile-pic"></div>
                        <div className="profile-name">
                            <h1>{channelName}</h1>
                            <p>{parseInt(subscriberCount).toLocaleString()} subscribers</p>
                        </div>
                    </div>
                    <div className="channel-username-topstuff-rightside">
                        <div className="subscribe-button">
                            <p>SUBSCRIBE</p>
                        </div>
                        <FontAwesomeIcon icon={faBell} className="notification-bell"/>
                    </div>
                </div>
                <div className="channel-username-bottomstuff">
                    <div className="left-channel-nav">
                        <p className="channel-nav">HOME</p>
                        <p className="channel-nav">VIDEOS</p>
                        <p className="channel-nav">PLAYLISTS</p>
                        <p className="channel-nav">COMMUNITY</p>
                        <p className="channel-nav">CHANNELS</p>
                        <p className="channel-nav">ABOUT</p>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icons"/>
                    </div>
                    <div className="right-channel-nav">
                        <p> {">"} </p>
                    </div>
                    
                </div>
            </div>
            <div className="video-section">

            </div>
        </div>
    )
}
export default PageContents;