import axios from "axios";
import React, {useEffect} from "react";
import { YOUTUBE_API_KEY } from "../API_KEY";

function Home(){
    // var gapi = require('gapi');
    // gapi.server.setApiKey(YOUTUBE_API_KEY);
    // gapi.server.load();
    // const URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&forUsername=Apple&key=${YOUTUBE_API_KEY}`;

    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then((response) => {
    //             console.log({response});
    //         })
    //         .catch((error) => {
    //             console.log({error})
    //         });
    // }, []);
    
    return (
        <div>
            <p>gaslight from home</p>
        </div>
    );
}
export default Home;