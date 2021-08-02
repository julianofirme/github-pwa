import React from "react";
import { Link, useParams } from "react-router-dom";

import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import { RiGithubLine as ReposIcon } from "react-icons/ri";
import { BsPeople as PeopleIcon } from "react-icons/bs";

import "./styles.css";

function Footer() {
  const  { username = ''}  = useParams()

  return (
    <>
      <footer className="footer">
        <Link to={`/${username}`}>
          <div>
            <HomeIcon fill={"rgba(0, 0, 0, 0.801)"} size={"24px"} />
            <span>Home</span>
          </div>
        </Link>

        <Link to={`/${username}/repos`}>
          <div>
            <ReposIcon fill={"rgba(0, 0, 0, 0.801)"} size={"24px"} />
            <span>Repos</span>
          </div>
        </Link>

        <Link to={`/${username}/followers`}>
          <div>
            <PeopleIcon fill={"rgba(0, 0, 0, 0.801)"} size={"24px"} />
            <span>Seguidores</span>
          </div>
        </Link>

        <Link to={`/${username}/following`}>
          <div>
            <PeopleIcon fill={"rgba(0, 0, 0, 0.801)"} size={"24px"} />
            <span>Seguindo</span>
          </div>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
