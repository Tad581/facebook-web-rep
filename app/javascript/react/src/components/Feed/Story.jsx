import React from "react";


import arrowRight from "../../../../img/icons/arrow-right.svg"
import plus from "../../../../img/icons/plus.svg"
import hero from "../../../../img/avatar/hero.png"
import avatar2 from "../../../../img/avatar/2.jpg"
import st2 from "../../../../img/stories/st-2.jpeg"
import avatar3 from "../../../../img/avatar/3.jpg"
import st3 from "../../../../img/stories/st-3.jpeg"
import avatar4 from "../../../../img/avatar/4.jpg"
import st4 from "../../../../img/stories/st-4.jpg"
import avatar5 from  "../../../../img/avatar/5.jpg"
import st1 from "../../../../img/stories/st-1.jpeg"
import avatar6 from "../../../../img/avatar/6.jpg"

export default function Story() {
  return (
      <div className="stories">
        <div className="owl-controls">
          <div className="owl-nav">
            <div className="controllers nxtBtn">
              <img src={arrowRight} alt="" />
            </div>
          </div>
        </div>
        <div className="owl-carousel owl-theme slider">
          <div className="item">
            <div className="overlay first">
              <div className="create">
                <div className="icon">
                  <img src={plus} alt="" />
                </div>
                <span>Create a Story</span>
              </div>
            </div>
            <div className="story-image">
              <img src={hero} alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src={avatar2} alt="" />
                </div>
              </div>
              <h4> Samantha John</h4>
            </div>
            <div className="story-image">
              <img src={st2} alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src={avatar3} alt="" />
                </div>
              </div>
              <h4>Chris Evans</h4>
            </div>
            <div className="story-image">
              <img src={st3} alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src={avatar4} alt="" />
                </div>
              </div>
              <h4>Amanda Cerny</h4>
            </div>
            <div className="story-image">
              <img src={st4} alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src={avatar5} alt="" />
                </div>
              </div>
              <h4>Stacy Lopez </h4>
            </div>
            <div className="story-image">
              <img src={st1} alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src={avatar6} alt="" />
                </div>
              </div>
              <h4>Bibhushan Karki</h4>
            </div>
            <div className="story-image">
              <img src={st1} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}
