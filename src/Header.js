import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"


function Header() {
  return (
    <div className="header">
          <div className="header__left">
            <MenuIcon />
            <img
              className="header__logo"
              src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
              alt=""
            />
          </div>
          
          <div className="header__input">
            <input placeholder="Search" type="text" />
            <SearchIcon className="header__inputButton"/>
          </div>
          
          <div className="header__icons">
            <VideoCallIcon className="header__icons"/>
            <AppsIcon className="header__icons"/>
            <NotificationsIcon className="header__icons"/>
            <Avatar
              alt="Remy Sharp"
              src="https://www.pinterest.com/pin/507921664222508104/"
            />
          </div>
          
    </div>
  )
}

export default Header