import React from "react";

import { AiOutlineArrowRight as RightArrow } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./styles.css";

function ProfileCard({ avatarUrl, username }) {
  return (
    <>
      <div className="profile-card-container">
        <div className="profile-card-info">
          <img src={avatarUrl} alt="" className="profile-card-avatar" />
          <span>#{username}</span>
        </div>

        <Link  to={`/${username}`}>
          <RightArrow fill={"#FFF"}/>
        </Link>
      </div>
    </>
  );
}

export default ProfileCard;
