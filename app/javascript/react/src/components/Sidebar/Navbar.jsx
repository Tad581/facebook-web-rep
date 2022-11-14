import React from "react";

import facebook from "../../../../img/icons/facebook.svg"
import home from "../../../../img/icons/home.svg"
import flag from "../../../../img/icons/flag.svg"
import tv from "../../../../img/icons/tv.svg"
import users from "../../../../img/icons/users.svg"
import calendar from "../../../../img/icons/calendar.svg"
import avatar4 from "../../../../img/avatar/4.jpg"
import plus from "../../../../img/icons/plus.svg"
import messenger from "../../../../img/icons/messenger.svg"
import bell from "../../../../img/icons/bell.svg"
import arrow from "../../../../img/icons/arrow.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="left-side">
          <div className="logo">
            <img  src={facebook} alt="" />
          </div>

          <div className="search">
            <input type="text" placeholder="Search Facebook" name="" id="" />
          </div>
        </div>

        <div className="tabs">
          <div className="tab-icon active">
            <div className="icon">
              <img  src={home} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon has-notification">
              <img  src={flag} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon">
              <img  src={tv} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon">
              <img  src={users} alt="" />
            </div>
          </div>

          <div className="tab-icon">
            <div className="icon has-notification">
              <img  src={calendar} alt="" />
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="user">
            <div className="profile">
              <img  src={avatar4} alt="" />
            </div>
            <h4>Anne</h4>
          </div>

          <div className="user-icons">
            <div className="icon">
              <img  src={plus} alt="" />
            </div>

            <div className="icon has-notification">
              <img  src={messenger} alt="" />
            </div>

            <div className="icon">
              <img  src={bell} alt="" />
            </div>

            <div className="icon">
              <img  src={arrow} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
