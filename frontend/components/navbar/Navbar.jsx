import styles from "./Navbar.module.scss";
import { useState } from "react";
import Link from 'next/link'

import List from "../list/List";
import User from "../user/User";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const menuData = [
  {
    key: 1,
    title: "Change Order",
    link: "/All",
  },
  {
    key: 2,
    title: "Archived Queries",
    link: "/All",
  },
  {
    key: 3,
    title: "Menu Item",
    link: "/All",
  },
  {
    key: 4,
    title: "Menu Item",
    link: "/All",
  },
];

const notifications = [
  {
    key: 1,
    title: "Query #123 escalated",
    link: "/All",
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
    link: "/All",
  },
  {
    key: 2,
    icon: <VerifiedUserOutlinedIcon />,
    title: "Privacy",
    link: "/All",
  },
  {
    key: 3,
    icon: <LogoutOutlinedIcon />,
    title: "Log out",
    link: "/All",
  },
  {
    key: 4,
    icon: <SettingsOutlinedIcon />,
    title: "Settings",
    link: "/All",
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
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.left}>
          <MenuIcon
            className={`${styles.icon} ${(showMenu ? styles.active : "")}`}
            onClick={() => handleDisplay("menu")}
          />
          {showMenu && (
            <div className={styles.menu}>
              <List data={menuData} />
            </div>
          )}
        </div>
        <ul className={styles.center}>
          <li className={current === "all" ? styles.current : ""}>
            <Link className={styles.link} href="/All">
              All
            </Link>
          </li>
          <li className={current === "query" ? styles.current : ""}>
            <Link className={styles.link} href="/Query">
              Query
            </Link>
          </li>
          <li className={current === "activity" ? styles.current : ""}>
            <Link className={styles.link} href="/Activity">
              Activity
            </Link>
          </li>
          <li className={current === "topics" ? styles.current : ""}>
            <Link className={styles.link} href="/Topics">
              Topics
            </Link>
          </li>
        </ul>
        <div className={styles.right}>
          <NotificationsNoneIcon
            className={`${styles.icon} ${(showNotif ?  styles.active : "")}`}
            onClick={() => handleDisplay("notif")}
          />
          {showNotif && (
            <div className={styles.notif}>
              <List data={notifications} />
            </div>
          )}
          <PersonOutlinedIcon
            className={`${styles.icon} ${(showUserInfo ?  styles.active : "")}`}
            onClick={() => handleDisplay("userInfo")}
          />
          {showUserInfo && (
            <div className={styles.userInfo}>
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
