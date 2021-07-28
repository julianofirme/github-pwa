import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight as RightArrow,
  AiFillGithub as GithubIcon,
} from "react-icons/ai";

import "./styles.css";

function LoginScreen() {
  return (
    <div className="login-container">
      <GithubIcon fill={"#fcce03"} size={"96px"} />
      <input type="text" className="login-input" placeholder="Usuário" />
      <Link to="/home">
        <button className="login-btn">
          ENTRAR <RightArrow />
        </button>
      </Link>
    </div>
  );
}

export default LoginScreen;
