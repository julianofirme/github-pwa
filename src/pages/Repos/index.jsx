import React, { useEffect, useState } from "react";
import RepositoryCard from "../../components/RepositoryCard";
import Footer from "../../components/Footer";

import "./styles.css";
import { useParams } from "react-router";

function Repos() {
  const { username } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    Promise.all([fetch(`https://api.github.com/users/${username}/repos`)]).then(
      async (response) => {
        const [reposResponse] = response;

        if (reposResponse.status === 404) {
          setData({ error: "User not found" });

          return;
        }

        const repo = await reposResponse.json();

        setData({
          repo,
        });
      }
    );
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="repos-container">
        {data.repo.map((item) => (
          <RepositoryCard
            key={item.name}
            reponame={item.name}
            repoinfo={item.description}
            stars={item.stargazers_count}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Repos;
