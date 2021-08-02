import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import Followers from "./pages/Followers";
import Following from "./pages/Following";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/:username" exact component={Home} />
      <Route path="/:username/repos" component={Repos} />
      <Route path="/:username/followers" component={Followers} />
      <Route path="/:username/following" component={Following} />
    </BrowserRouter>
  );
}

export default App;
