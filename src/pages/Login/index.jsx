import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  AiOutlineArrowRight as RightArrow,
  AiFillGithub as GithubIcon,
} from "react-icons/ai";

import "./styles.css";

function Login() {
  let history = useHistory();
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    history.push(`/${search}`);
  }

  return (
    <div className="login-container">
      <GithubIcon fill={"#fcce03"} size={"96px"} />
      <input
        type="text"
        className="login-input"
        placeholder="Usuário"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="login-btn" onClick={handleSearch}>
        ENTRAR <RightArrow />
      </button>
    </div>
  );
}

export default Login;
