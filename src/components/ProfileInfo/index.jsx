import React from "react";

import { Link } from "react-router-dom";

import { BsBoxArrowRight as LeftIcon } from "react-icons/bs";

import "./styles.css";

function ProfileInfo() {
  return (
    <>
      <section className="profile-header">
        <span>#juliano</span>
        <Link to="/">
          <LeftIcon fill={"red"} size={"24px"} />
        </Link>
      </section>

      <section className="conatiner-avatar">
        <img
          src="https://avatars.githubusercontent.com/u/71743049?v=4"
          alt=""
          className="profile-avatar"
        />
      </section>

      <section className="profile-info">
        <h2>JULIANO FIRME</h2>
        <p>juliano@gmail.com</p>
        <p>Braúna/SP</p>
      </section>

      <section className="profile-follows-repos">
        <div className="profile-followers">
          <h1>32</h1>
          <p>Seguidores</p>
        </div>

        <div className="profile-following">
          <h1>32</h1>
          <p>Seguidores</p>
        </div>

        <div className="profile-repositorys">
          <h1>32</h1>
          <p>Seguidores</p>
        </div>
      </section>

      <section className="profile-bio">
        <h2>BIO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro
          quibusdam tempora dolore necessitatibus odit asperiores a omnis
          mollitia illo architecto obcaecati soluta, amet accusamus voluptates
          vero ratione modi. Fugiat?
        </p>
      </section>
    </>
  );
}

export default ProfileInfo;
