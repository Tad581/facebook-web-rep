import React from "react";

export default function Story() {
  return (
    <div className="story posts">
      <div className="stories">
        <div className="owl-controls">
          <div className="owl-nav">
            <div className="controllers nxtBtn">
              <img src="../../img/icons/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="owl-carousel owl-theme slider">
          <div className="item">
            <div className="overlay first">
              <div className="create">
                <div className="icon">
                  <img src="../../img/icons/plus.svg" alt="" />
                </div>
                <span>Create a Story</span>
              </div>
            </div>
            <div className="story-image">
              <img src="../../img/avatar/hero.png" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src="../../img/avatar/2.jpg" alt="" />
                </div>
              </div>
              <h4> Samantha John</h4>
            </div>
            <div className="story-image">
              <img src="../../img/stories/st-2.jpeg" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src="../../img/avatar/3.jpg" alt="" />
                </div>
              </div>
              <h4>Chris Evans</h4>
            </div>
            <div className="story-image">
              <img src="../../img/stories/st-3.jpeg" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src="../../img/avatar/4.jpg" alt="" />
                </div>
              </div>
              <h4>Amanda Cerny</h4>
            </div>
            <div className="story-image">
              <img src="../../img/stories/st-4.jpg" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src="../../img/avatar/5.jpg" alt="" />
                </div>
              </div>
              <h4>Stacy Lopez </h4>
            </div>
            <div className="story-image">
              <img src="../../img/stories/st-1.jpeg" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="overlay">
              <div className="person">
                <div className="profile">
                  <img src="../../img/avatar/6.jpg" alt="" />
                </div>
              </div>
              <h4>Bibhushan Karki</h4>
            </div>
            <div className="story-image">
              <img src="../../img/stories/st-1.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
