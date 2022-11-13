import Navbar from "./Sidebar/Navbar";
import React from "react";
import ApplicationBar from "./Sidebar/ApplicationBar";
import FriendSidebar from "./Sidebar/FriendSidebar";
import Feed from "./Feed";

export default function App() {
    return (
        <div>
            <Navbar />
            <ApplicationBar />
            <Feed/>
            <FriendSidebar />
        </div>
    )
}
