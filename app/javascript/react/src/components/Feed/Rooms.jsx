import React from "react";

import videoRoom from "../../../../img/icons/video-room.svg";
import hero from "../../../../img/avatar/hero.png";
import avatar1 from "../../../../img/avatar/1.jpg";
import avatar3 from "../../../../img/avatar/3.jpg";
import avatar4 from "../../../../img/avatar/4.jpg";
import avatar2 from "../../../../img/avatar/2.jpg";
import avatar5 from "../../../../img/avatar/5.jpg";
export default function Rooms() {
  return (
    <div className="create-post view smaller-margin">
        <div className="upper">
          <div className="title">
            <div className="icon">
              <img src={videoRoom} alt="" />
            </div>
            <span>Rooms</span>
          </div>
          <a href="">create</a>
        </div>
        <div className="owl-carousel owl-theme rooms">
          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={hero} alt="" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={avatar1} alt="" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={avatar3} alt="" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={avatar4} alt="" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={avatar2} alt="" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={avatar4} alt="" />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="user">
              <div className="profile">
                <img src={avatar5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
