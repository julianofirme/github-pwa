import React from "react";

import {
  AiOutlineStar as StarIcon,
  AiOutlineLock as LockIcon,
  AiOutlineUnlock as UnlockIcon,
} from "react-icons/ai";

import "./styles.css";

function RepositoryCard(
  {
    reponame,
    repoinfo,
    stars
  }
) {
  return (
    <>
      <div className="repo-container">
        <div className="repo-info">
          <p>
            <b>{reponame}</b>
          </p>
          <span>{repoinfo}</span>
        </div>

        <div className="repo-label">
          <div className="repo-starts">
            <StarIcon fill={"#FCCE03"} />
            <span>{stars}</span>
          </div>

          <div className="repo-visibility">
            <UnlockIcon fill={"green"} />
            <LockIcon fill={"red"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RepositoryCard;
