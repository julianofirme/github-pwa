import React from "react";

import { Link } from "react-router-dom";

import { BsBoxArrowRight as LeftIcon } from "react-icons/bs";

import "./styles.css";

function ProfileInfo({
  username,
  name,
  avatarUrl,
  followers,
  following,
  repos,
  bio,
  location,
  email,
}) {
  return (
    <>
      <section className="profile-header">
        <span>#{username}</span>
        <Link to="/">
          <LeftIcon fill={"red"} size={"24px"} />
        </Link>
      </section>

      <section className="conatiner-avatar">
        <img src={avatarUrl} alt="Avatar" className="profile-avatar" />
      </section>

      <section className="profile-info">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{location}</p>
      </section>

      <section className="profile-follows-repos">
        <div className="profile-followers">
          <h1>{followers}</h1>
          <p>Seguidores</p>
        </div>

        <div className="profile-following">
          <h1>{following}</h1>
          <p>Seguindo</p>
        </div>

        <div className="profile-repositorys">
          <h1>{repos}</h1>
          <p>Repos</p>
        </div>
      </section>

      <section className="profile-bio">
        <h2>BIO</h2>
        <p>{bio}</p>
      </section>
    </>
  );
}

export default ProfileInfo;
