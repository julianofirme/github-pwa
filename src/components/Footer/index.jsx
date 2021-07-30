import React from "react";
import { Link } from "react-router-dom";

import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import { RiGithubLine as ReposIcon } from "react-icons/ri";
import { BsPeople as PeopleIcon } from "react-icons/bs";

import "./styles.css";

function Footer() {
  return (
    <>
      <footer className="footer">

        <Link to="/home">
          <div>
            <HomeIcon fill={"rgba(0, 0, 0, 0.801)"} size={"30px"} />
            <span>Home</span>
          </div>
        </Link>

        <Link to="/home">
          <div>
            <ReposIcon fill={"rgba(0, 0, 0, 0.801)"} size={"30px"} />
            <span>Repos</span>
          </div>
        </Link>

        <Link to="/home">
          <div>
            <PeopleIcon fill={"rgba(0, 0, 0, 0.801)"} size={"30px"} />
            <span>Seguidores</span>
          </div>
        </Link>

        <Link to="/home">
          <div>
            <PeopleIcon fill={"rgba(0, 0, 0, 0.801)"} size={"30px"} />
            <span>Seguindo</span>
          </div>
        </Link>

      </footer>
    </>
  );
}

export default Footer;
