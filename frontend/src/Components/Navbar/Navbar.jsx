import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import List from "../List/List";
import User from "../User/User";

const menuData = [
  {
    key: 1,
    title: "Change Order",
    link: "../all",
  },
  {
    key: 2,
    title: "Archived Queries",
    link: "../all",
  },
  {
    key: 3,
    title: "Menu Item",
    link: "../all",
  },
  {
    key: 4,
    title: "Menu Item",
    link: "../all",
  },
];

const notifications = [
  {
    key: 1,
    title: "Query #123 escalated",
    link: "../all",
  },
];

const userData = {
  img: "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg",
  name: "Kartik Gupta",
  UID: "20BCS2345",
  type: "student",
  desc: "20BDA2-B",
};

const profileOptions = [
  {
    key: 1,
    icon: <PeopleAltOutlinedIcon />,
    title: "Switch ID",
    link: "../all",
  },
  {
    key: 2,
    icon: <VerifiedUserOutlinedIcon />,
    title: "Privacy",
    link: "../all",
  },
  {
    key: 3,
    icon: <LogoutOutlinedIcon />,
    title: "Log out",
    link: "../all",
  },
  {
    key: 4,
    icon: <SettingsOutlinedIcon />,
    title: "Settings",
    link: "../all",
  },
];

function Navbar({ current }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleDisplay = (type) => {
    if (type === "menu") {
      setShowMenu(!showMenu);
      setShowNotif(false);
      setShowUserInfo(false);
    }
    if (type === "userInfo") {
      setShowMenu(false);
      setShowNotif(false);
      setShowUserInfo(!showUserInfo);
    }
    if (type === "notif") {
      setShowMenu(false);
      setShowNotif(!showNotif);
      setShowUserInfo(false);
    }
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="left">
          <MenuIcon
            className={"icon" + (showMenu ? " active" : "")}
            onClick={() => handleDisplay("menu")}
          />
          {showMenu && (
            <div className="menu">
              <List data={menuData} />
            </div>
          )}
        </div>
        <ul className="center">
          <li className={current === "all" ? "current" : ""}>
            <Link className="link" to={"../all"}>
              All
            </Link>
          </li>
          <li className={current === "query" ? "current" : ""}>
            <Link className="link" to={"../query"}>
              Query
            </Link>
          </li>
          <li className={current === "activity" ? "current" : ""}>
            <Link className="link" to={"../activity"}>
              Activity
            </Link>
          </li>
          <li className={current === "topics" ? "current" : ""}>
            <Link className="link" to={"../topics"}>
              Topics
            </Link>
          </li>
        </ul>
        <div className="right">
          <NotificationsNoneIcon
            className={"icon" + (showNotif ? " active" : "")}
            onClick={() => handleDisplay("notif")}
          />
          {showNotif && (
            <div className="notif">
              <List data={notifications} />
            </div>
          )}
          <PersonOutlinedIcon
            className={"icon" + (showUserInfo ? " active" : "")}
            onClick={() => handleDisplay("userInfo")}
          />
          {showUserInfo && (
            <div className="userInfo">
              <User data={userData} />
              <List data={profileOptions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
