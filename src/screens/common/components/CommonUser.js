import React from "react";
import {  Avatar} from "@chakra-ui/react";

import "./commonuser.scss";
export default function CommonUser() {
    return (
        <div className="common_user">
            <Avatar src='https://ehonami.blob.core.windows.net/media/2016/02/ditch-this-man-zapper-to-increase-virility-800x600.jpg' />
            <div className="follower_info">
                <h1>john doe</h1>
                <p>@john_love</p>
                </div>
                <div className="button_name">
                    <button className="button_info">following</button>
                </div>
                <div className="dot_symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>
                </div>
            </div>
    )
}