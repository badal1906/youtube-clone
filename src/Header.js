import React,{ useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom"

function Header() {
  const [inputSearch,setInputSeacrh] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to ={'/'}>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
        </Link >
      </div>

      <div className="header__input">
        <input onChange={e => setInputSeacrh(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        
        <Link to ={`/search/${inputSearch}`}>{/*shows searched keyword in url */}
        <SearchIcon className="header__inputButton"/>
        </Link>
      </div>

      <div className="header__icons">
      <VideoCallIcon className="header__icon"/>
      <AppsIcon className="header__icon" />
      <NotificationsIcon className="header__icon"/>
      <Avatar />
      </div>
    </div>
  );
}

export default Header;
