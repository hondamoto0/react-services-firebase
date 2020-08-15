import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Menu</div>
        <button className="sidebar-close">
          <i className="fa fa-times-circle"></i>
        </button>
      </div>
      <div className="inner">
        <ul className="sidebar-menu">
          <li>
            <span className="nav-section-title"></span>
          </li>
          <li className="have-children">
            <button href="#">User</button>
            <ul>
              <li>
                <button href="#">Profile</button>
              </li>
              <li>
                <button href="#">Account</button>
              </li>
              <li>
                <button href="#">Settings</button>
              </li>
            </ul>
          </li>
          <li className="have-children">
            <button href="#">Messages</button>
            <ul>
              <li>
                <button href="#">Inbox</button>
              </li>
              <li>
                <button href="#">Compose</button>
              </li>
            </ul>
          </li>
          <li className="have-children">
            <button href="#">Images</button>
            <ul>
              <li>
                <button href="#">Library</button>
              </li>
              <li>
                <button href="#">Upload</button>
              </li>
            </ul>
          </li>
          <li className="have-children">
            <button href="#">Settings</button>
            <ul>
              <li>
                <button href="#">User settings</button>
              </li>
              <li>
                <button href="#">App settings</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
