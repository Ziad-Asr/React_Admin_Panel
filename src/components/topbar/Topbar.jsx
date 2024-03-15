import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import navbarImage from "../../assets/images/navbar.jpg";

import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ziad ERP</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlinedIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageOutlinedIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsOutlinedIcon />
          </div>
          <img src={navbarImage} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
