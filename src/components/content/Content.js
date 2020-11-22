import React from 'react';
import MainBar from "./main-bar/MainBar";
import SideBar from "./side-bar/SideBar";

import "./Content.css";

export default function Content() {
    return (
        <div className="content"> 
            <div className= "bars-wrapper"> 
            <span className="popular-posts-title">Popular posts</span>
                <div className="bars-wrapper-inside">
                    <MainBar/>
                    <SideBar/>
                </div>
            </div>
        </div>
        
    )
}