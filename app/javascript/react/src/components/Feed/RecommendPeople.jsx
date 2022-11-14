import React from "react";
import avatar1 from "../../../../img/avatar/1.jpg"
import avatar4 from "../../../../img/avatar/4.jpg"
import avatar3 from "../../../../img/avatar/3.jpg"
import avatar2 from "../../../../img/avatar/2.jpg"

export default function RecommendPeople() {
  return (
    <div className="posts recommend">
      <div className="view friends smaller-margin">
        <div className="upper">
          <h6>people you may know</h6>
          <div className="dots">
            <div className="dot"></div>
          </div>
        </div>

        <div className="owl-carousel owl-theme people">
          <div className="item">
            <div className="person-img">
              <div className="icon">&times;</div>
              <img src={avatar1} alt="" />
            </div>

            <div className="info">
              <h4>rosie pie</h4>
              <span>4 mutual friend</span>
              <button>add friend</button>
            </div>
          </div>

          <div className="item">
            <div className="person-img">
              <div className="icon">&times;</div>
              <img src={avatar4} alt="" />
            </div>

            <div className="info">
              <h4>sarah jones</h4>
              <span>4 mutual friend</span>
              <button>add friend</button>
            </div>
          </div>

          <div className="item">
            <div className="person-img">
              <div className="icon">&times;</div>
              <img src={avatar3} alt="" />
            </div>

            <div className="info">
              <h4>chris doe</h4>
              <span>4 mutual friend</span>
              <button>add friend</button>
            </div>
          </div>

          <div className="item">
            <div className="person-img">
              <div className="icon">&times;</div>
              <img src={avatar2} alt="" />
            </div>

            <div className="info">
              <h4>katie adam</h4>
              <span>4 mutual friend</span>
              <button>add friend</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
