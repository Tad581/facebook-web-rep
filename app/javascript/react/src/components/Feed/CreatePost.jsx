import React from "react";
import hero from "../../../../img/avatar/hero.png"
import video_live from '../../../../img/icons/video-live.svg'
import photos from "../../../../img/icons/photos.svg"
import smile from "../../../../img/icons/smile.svg"

export default function CreatePost() {
  return (
    <div className="create-post">
      <div className="post">
        <div className="view create-post">
          <div className="input">
            <div className="user">
              <div className="profile">
                <img src={hero} alt="" />
              </div>
            </div>
            <input
              type="text"
              placeholder="What on your mind, Anne?"
              name=""
              id=""
            />
          </div>
          <div className="media">
            <div className="category">
              <div className="option">
                <div className="icon">
                  <img src={video_live} alt="" />
                </div>
                <span>Live video</span>
              </div>

              <div className="option">
                <div className="icon">
                  <img src={photos} alt="" />
                </div>
                <span>photo/video</span>
              </div>

              <div className="option">
                <div className="icon">
                  <img src={smile} alt="" />
                </div>
                <span>feeling/activity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
