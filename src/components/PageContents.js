import { YOUTUBE_API_KEY } from "../API_KEY";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";

function PageContents({channelName = "beyonce"}) {
    const [youtubeData, setYoutubeData] = useState({});
    const [viewCount, setViewCount] = useState(0);
    const [subscriberCount, setSubscriberCount] = useState(0);


    useEffect(() => {
        const URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${channelName}&key=${YOUTUBE_API_KEY}`;
        axios
            .get(URL)
            .then( function(response) {
                console.log(response);
                setViewCount(response.data.items[0].statistics.viewCount);
                setSubscriberCount(response.data.items[0].statistics.subscriberCount);

            })
            .catch(function(error){
                console.warn(error);
                setYoutubeData({});
            })
    }, [channelName]);
    

    return(
        <div className="page-contents-wrapper">
            <div className="channel-header">
                <h1>{channelName}</h1>
                <h1>{viewCount}</h1>
                <h1>{channelName} has a total of {viewCount} views</h1>
                <h1 id="city-info"></h1>
            </div>
            <div className="channel-username">
                <div className="channel-username-topstuff">
                    <div className="channel-username-topstuff-leftside">
                        <div className="profile-pic"></div>
                        <div className="profile-name">
                            <h1>{channelName}</h1>
                            <p>{subscriberCount}</p>
                        </div>
                    </div>
                    <div className="channel-username-topstuff-rightside">
                        <div className="subscribe-button">
                            <p>SUBSCRIBE</p>
                        </div>
                        <FontAwesomeIcon icon={faBell} className="notification-bell"/>
                    </div>
                </div>
                <div className="channel-username-bottomtuff"></div>
            </div>
            <div className="video-section">

            </div>
        </div>
    )
}
export default PageContents;