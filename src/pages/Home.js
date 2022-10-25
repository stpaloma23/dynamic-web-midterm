import axios from "axios";
import React, {useEffect, useState} from "react";
import { YOUTUBE_API_KEY } from "../API_KEY";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PageContents from "../components/PageContents";

function Home(){
    // var gapi = require('gapi');
    // gapi.server.setApiKey(YOUTUBE_API_KEY);
    // gapi.server.load();
    const youtubeChannelId = 'beyonce';
    const URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${youtubeChannelId}&key=${YOUTUBE_API_KEY}`;
    const [youtubeChannelViewCount, setYoutubeChannelViewCount] = useState({});
    const [youtubeData, setYoutubeData] = useState({});
    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then( function(response) {
    //             console.log(response);
    //             setYoutubeData(response.data);
    //         })
    //         .catch(function(error){
    //             console.warn(error);
    //             setYoutubeData({});
    //         })
    // }, []);
    return (
        <div>
            <Header />
            <div className="page-info-wrapper">
                <SideBar />
                <PageContents />
            </div>
        </div>
    );
}
export default Home;