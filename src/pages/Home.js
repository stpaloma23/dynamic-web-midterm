import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PageContents from "../components/PageContents";
// questions: 
// round city data to the nearest thousands and put it in a map. 
// {30,000: ["panama city", "other city", "other city"], 8,000,000: ["new york"]}
// header is in one card, how do i take data from one card transfer it to the other section thatll need it
// when press the search button, make it change page 

function Home(){
    const [searchInput, setSearchInput] = useState();
    return (
        <div>
            <Header setSearchInput={setSearchInput}/>
            <div className="page-info-wrapper">
                <SideBar />
                <PageContents channelName={searchInput} />
            </div>
        </div>
    );
}
export default Home;