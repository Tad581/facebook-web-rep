import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Rooms from "./Rooms";
import Story from "./Story";
import RecommendPeople from "./RecommendPeople";

export default function Feed() {
  return (
    <div className="feed">
      <Story />
      <CreatePost />
      <Rooms />
      <Post />
      <RecommendPeople />
    </div>
  );
}
