import React from "react";

import avatar5 from "../../../../img/avatar/5.jpg";
import post1 from "../../../../img/posts/1.jpg";
import thumbsup from "../../../../img/icons/thumbs-up.svg";
import comment from "../../../../img/icons/comment.svg";
import share from "../../../../img/icons/share.svg";
import camera from "../../../../img/icons/camera.svg";
import image from "../../../../img/icons/image.svg";
import smile2 from "../../../../img/icons/smile-2.svg";

export default function Post() {
  return (
    <div className="posts">
      <div className="view view-post-container smaller-margin">
        <div className="view-post">
          <div className="upper">
            <div className="d-flex">
              <div className="user">
                <div className="profile">
                  <img src={avatar5} alt="" />
                </div>
              </div>

              <div className="info">
                <h6 className="name">diana barry</h6>
                <span className="time">1 hour ago</span>
              </div>
            </div>

            <div className="dots">
              <div className="dot"></div>
            </div>
          </div>

          <div className="desc">
            <p>Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴</p>
          </div>

          <div className="post-img">
            <img src={post1} alt="" />
          </div>

          <div className="actions-container">
            <div className="action">
              <div className="icon">
                <img src={thumbsup} alt="" />
              </div>
              <span>like</span>
            </div>

            <div className="action">
              <div className="icon">
                <img src={comment} alt="" />
              </div>
              <span>comment</span>
            </div>

            <div className="action">
              <div className="icon">
                <img src={share} alt="" />
              </div>
              <span>share</span>
            </div>
          </div>

          <div className="write-comment">
            <div className="user">
              <div className="profile">
                <img src="../../img/avatar/hero.png" alt="" />
              </div>
            </div>
            <div className="input">
              <input type="text" placeholder="Write a comment" name="" id="" />
              <div className="media">
                <div className="icon">
                  <img src={camera} alt="" />
                </div>
                <div className="icon">
                  <img src={image} alt="" />
                </div>
                <div className="icon">
                  <img src={smile2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
