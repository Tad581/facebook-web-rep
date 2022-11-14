import React from "react";

import hero from "../../../../img/avatar/hero.png"
import shield from "../../../../img/icons/shield.svg"
import colorPeople from "../../../../img/icons/colored-people.svg"
import colorMessenger from "../../../../img/icons/colored-messenger.svg"
import colorFlag from "../../../../img/icons/colored-flag.svg"
import arrowDown from "../../../../img/icons/arrow-down.svg"
import st1 from "../../../../img/stories/st-1.jpeg"
import st2 from "../../../../img/stories/st-2.jpeg"
import page1 from "../../../../img/stories/page-1.jpg"
import st3 from "../../../../img/stories/st-3.jpeg"
import page2 from "../../../../img/stories/page-2.jpg"
import page3 from "../../../../img/stories/page-3.jpeg"

export default function ApplicationBar() {
  return (
    <div className="application-bar">
      <div className="wrapper">
        <div className="shortcuts">
          <div className="first-col">
            <div className="menu-item">
              <div className="user">
                <div className="profile">
                  <img src={hero} alt="" />
                </div>
                <h4>Anne</h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={shield} alt="" />
                </div>
                <h4>COVID-19 Infromation Center </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={colorPeople} alt="" />
                </div>
                <h4>Friends </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={colorMessenger} alt="" />
                </div>
                <h4>Messenger </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={colorFlag} alt="" />
                </div>
                <h4>Pages </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row  border">
                <div className="icon more">
                  <img src={arrowDown} alt="" />
                </div>
                <h4>see more </h4>
              </div>
            </div>
          </div>
          <div className="second-col">
            <h6 className="title">your shortcuts</h6>
            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={st1} alt="" />
                </div>
                <h4>Designers house </h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="item-row">
                <div className="icon">
                  <img src={st2} alt="" />
                </div>
                <h4>Script house </h4>
              </div>
              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={page1} alt="" />
                  </div>
                  <h4>ui ux Designers workshop </h4>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={st3} alt="" />
                  </div>
                  <h4>netflix movies recommends </h4>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={page2} alt="" />
                  </div>
                  <h4>the future </h4>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-row">
                  <div className="icon">
                    <img src={page3} alt="" />
                  </div>
                  <h4>aj smart </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
