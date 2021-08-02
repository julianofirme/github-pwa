import React, { useEffect, useState } from "react";

import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import { useParams } from "react-router";

function Followers() {
  const { username } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}/followers`),
    ]).then(async (response) => {
      const [reposResponse] = response;

      if (reposResponse.status === 404) {
        setData({ error: "User not found" });

        return;
      }

      const follow = await reposResponse.json();

      setData({
        follow,
      });
    });
  }, [username]);

  return (
    <>
      <div>
        {data?.follow.map((item) => (
          <ProfileCard
            key={item.login}
            avatarUrl={item.avatar_url}
            username={item.login}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Followers;
