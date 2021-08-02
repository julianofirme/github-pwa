import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import ProfileInfo from "../../components/ProfileInfo";

function Home() {
  const { username } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    Promise.all([fetch(`https://api.github.com/users/${username}`)]).then(
      async (response) => {
        const [userResponse] = response;

        if (userResponse.status === 404) {
          setData({ error: "User not found" });

          return;
        }

        const user = await userResponse.json();

        setData({ user });
      }
    );
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ProfileInfo
        username={data.user.login}
        name={data.user.name}
        avatarUrl={data.user.avatar_url}
        followers={data.user.followers}
        following={data.user.following}
        location={data.user.location}
        email={data.user.email}
        repos={data.user.public_repos}
        bio={data.user.bio}
      />
      <Footer />
    </>
  );
}

export default Home;
