import React, { useState} from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PageContents from "../components/PageContents";

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